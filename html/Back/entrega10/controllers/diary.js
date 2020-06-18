const { getConnection } = require('../db');

const {
  formatDateToDB,
  processAndSavePhoto,
  deletePhoto
} = require('../helpers');

const { entrySchema, voteSchema, searchSchema } = require('../../validations/index');

// Función mostrar lista de posts
async function listEntries(req, res, next) {
  try {
    const connection = await getConnection();
    const { search } = req.query;

    let result;

    if (search) {
      await searchSchema.validateAsync(search);

      result = await connection.query(
        `SELECT diary.*, 
        (SELECT AVG(vote) FROM diary_votes WHERE entry_id=diary.id) AS voteAverage
        FROM diary
        WHERE diary.place LIKE ? OR diary.description LIKE ?
        ORDER BY diary.date DESC`,
        [`%${search}%`, `%${search}%`]
      );
    } else {
      result = await connection.query(
        `SELECT diary.*, 
        (SELECT AVG(vote) FROM diary_votes WHERE entry_id=diary.id) AS voteAverage
        FROM diary
        ORDER BY diary.date DESC`
      );
    }

    const [entries] = result;

    connection.release();

    res.send({
      status: 'ok',
      data: entries
    });
  } catch (error) {
    next(error);
  }
}

// POST función para ingresar nuevo posts
async function newEntry(req, res, next) {

  try {
    await entrySchema.validateAsync(req.body);

    const { place, description } = req.body;

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);
      } catch (error) {
        const imageError = new Error(
          ' No se puede procesar la carga de la imagen. Inténtalo de nuevo.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    }

    const connection = await getConnection();

    const date = formatDateToDB(new Date());

    const [
      result
    ] = await connection.query(
      'INSERT INTO diary(date, place, description, image, user_id) VALUES(?, ?, ?, ?, ?)',
      [date, place, description, savedFileName, req.auth.id]
    );

    connection.release();

    res.send({
      status: 'ok',
      data: {
        id: result.insertId,
        date,
        place,
        description,
        image: savedFileName,
        user_id: req.auth.id
      }
    });
  } catch (error) {
    next(error);
  }
}

// PUT modificar un posts
async function editEntry(req, res, next) {
  try {
    const { place, description } = req.body;
    const { id } = req.params;

    await entrySchema.validateAsync(req.body);

    const connection = await getConnection();

    const [
      current
    ] = await connection.query('SELECT image, user_id FROM diary WHERE id=?', [
      id
    ]);

    if (!current.length) {
      const error = new Error(`La entrada con id ${id} no existe`);
      error.httpCode = 404;
      throw error;
    }

    // autentificar si el usuario es autor o admin user 
    if (current[0].user_id !== req.auth.id && req.auth.role !== 'admin') {
      const error = new Error('No tienes permisos para editar esta entrada');
      error.httpCode = 401;
      throw error;
    }

    let savedFileName;

    if (req.files && req.files.photo) {
      try {
        savedFileName = await processAndSavePhoto(req.files.photo);

        if (current && current.image) {
          await deletePhoto(current.image);
        }
      } catch (error) {
        const imageError = new Error(
          'No se puede procesar la carga de la imagen. Inténtalo de nuevo.'
        );
        imageError.httpCode = 400;
        throw imageError;
      }
    } else {
      savedFileName = current.image;
    }

    await connection.query(
      'UPDATE diary SET place=?, description=?, image=? WHERE id=?',
      [place, description, savedFileName, id]
    );

    connection.release();

    res.send({
      status: 'ok',
      data: {
        id,
        place,
        description,
        image: savedFileName
      }
    });
  } catch (error) {
    next(error);
  }
}

// GET  mostrar post por id
async function getEntry(req, res, next) {
  try {
    const { id } = req.params;

    const connection = await getConnection();

    const [result] = await connection.query(
      `select d.id, d.date, description, place, d.user_id, image, avg(v.vote) as vote
      from diary d
      left join diary_votes v
      on d.id = v.entry_id
      WHERE d.id = ?`,
      [id]
    );

    if (!result[0].id) {
      const error = new Error(`La entrada con id ${id} no existet`);
      error.httpCode = 404;
      throw error;
    }

    connection.release();

    res.send({
      status: 'ok',
      data: result[0]
    });
  } catch (error) {
    next(error);
  }
}

// DELETE - Borrar post
async function deleteEntry(req, res, next) {
  try {
    const { id } = req.params;

    const connection = await getConnection();

    // Delete imagen si  existe!
    const [
      current
    ] = await connection.query('SELECT image from diary where id=?', [id]);

    if (!current.length) {
      const error = new Error(`No hay entrada con id ${id}`);
      error.httpCode = 400;
      throw error;
    }

    if (current.image) {
      await deletePhoto(current.image);
    }

    await connection.query('DELETE from diary WHERE id=?', [id]);
    await connection.query('DELETE FROM diary_votes WHERE entry_id=?', [id]);

    connection.release();

    res.send({
      status: 'ok',
      message: `La entrada con id ${id} ha sido eliminada`
    });
  } catch (error) {
    next(error);
  }
}

// POST - entrada nuevo voyo
async function voteEntry(req, res, next) {
  try {
    const { id } = req.params;

    // Validar payload
    await voteSchema.validateAsync(req.body);

    const { vote } = req.body;

    const connection = await getConnection();

    // chequear si existe post actual 
    const [entry] = await connection.query('SELECT id from diary where id=?', [
      id
    ]);

    if (!entry.length) {
      const error = new Error('La entrada con la id específicada no existe');
      error.httpCode = 404;
      throw error;
    }

    // Comprobar si el usuario con la ID actual ya votó por esta entrada
    const [
      existingVote
    ] = await connection.query(
      'SELECT id from diary_votes where entry_id=? AND user_id=?',
      [id, req.auth.id]
    );

    if (existingVote.length) {
      const error = new Error('Ya se votó a esta entrada');
      error.httpCode = 403;
      throw error;
    }

    //Vote
    await connection.query(
      `
      INSERT INTO diary_votes(entry_id, vote, date, user_id) 
      VALUES(?, ?, ?, ?)`,
      [id, vote, formatDateToDB(new Date()), req.auth.id]
    );

    connection.release();

    res.send({
      status: 'ok',
      message: `El voto (${vote} puntos) a la entrada con id ${id} fue exitoso`
    });
  } catch (error) {
    next(error);
  }
}

 // mostrar votos
async function getEntryVotes(req, res, next) {
  try {
    const { id } = req.params;
    const connection = await getConnection();

    const [
      votes
    ] = await connection.query('SELECT * from diary_votes WHERE entry_id=?', [
      id
    ]);

    connection.release();

    res.send({
      status: 'ok',
      data: votes
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listEntries,
  newEntry,
  getEntry,
  deleteEntry,
  editEntry,
  voteEntry,
  getEntryVotes
};
