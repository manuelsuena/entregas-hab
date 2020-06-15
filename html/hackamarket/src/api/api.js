//express
const express = require('express');
//cors
const cors = require('cors');
//BODYPARSER
const bodyParser = require('body-parser');
//MYSQL
const mysql = require('mysql');

//jsonwebtoken dependencia de tokens
const jwt = require('jsonwebtoken')
const config = require('./config')


//APP
const app = express();

// APP USES

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('llave', config.llave)

// Datos de conexión a la BBDD
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: '',
});

connection.connect(error =>{
    if(error) throw error
    console.log('DATABASE UP')
});

// Puerto de conexión con la API
const PORT = 3005;

app.listen(PORT, () => console.log('API UP'));

//get de prueba
app.get('/', (req, res) => {
    res.send('Bienvenidos a mi API')
});


// MÉTODO LOGIN QUE CREA EL TOKEN
 app.post('/auth', (req, res) =>{

    // Datos que llegan, user y passw
   const email = req.body.email
   const password = req.body.password

   // Secuencia SQL
   const sql = `SELECT * FROM usuarios WHERE email= '${email}' AND password= '${password}'`

  // conexión BBDD
  connection.query(sql, (error, results) => {
      let admin = null 
      if(error) throw error
      if(results.length > 0){
          const payload = {
              check: true
          }
          if(results[0].admin === 1){
              admin = true
          } else {
              admin = false
          }

          const token = jwt.sign(payload, app.get('llave'), {
            expiresIn: "1 day"
          })
          res.json({
            mensaje: ' autentificación correcta',
            token: token,
            admin: admin,
          })
      } else {
        //console.log('Datos incorrectos')
        res.status(404).send({status:"404", message:"Error loggin"})
      }
      })

    })

  /// Rutas clientes
// RECOGIENDO TODAS LOS CLIENTES
app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM clientes'
    connection.query(sql, (error, results) =>{
        if(error) throw error
        if(results.length > 0) {
            res.json(results)
        } else {
            res.send('no hay cliente')
        }
    })
})

// añadiendo un cliente

// crear cliente

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO clientes SET ?'
    const newClient= {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ciudad: req.body.ciudad,
        empresa: req.body.empresa,
    }

    connection.query(sql, newClient, error  =>{
        if(error) throw error;
        res.send ('Cliente creado')
    })
})

  // Borrando clientes
  app.delete('/clientes/del/:id', (req, res) => {
    const id = req.params.id 
    const sql = `DELETE FROM clientes where id=${id}`

    connection.query(sql, error  =>{
        if(error) throw error;
        res.send ('Cliente borrado')
    })
})


// actualizar cliente

app.put('/cliente/update/:id', (req, res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const ciudad = req.body.ciudad
    const empresa = req.body.empresa
    const sql = `UPDATE clientes SET nombre='${nombre}',
    apellido='${apellido}',
    ciudad='${ciudad}',
    empresa='${empresa}'
    WHERE id='${id}'`
    connection.query(sql, error  =>{
        if(error) throw error;
        res.send ('Cliente actualizado')
    })
});

// Ruta de productos

// RECOGIENDO TODAS LOS CLIENTES
app.get('/productos', (req, res) => {
    const sql = 'SELECT * FROM productos'
    connection.query(sql, (error, results) =>{
        if(error) throw error
        if(results.length > 0) {
            res.json(results)
        } else {
            res.send('no hay cliente')
        }
    })
})

// Registro de usuario nuevo
app.post('/add-usuario', (req, res) => {
    const sql = 'INSERT INTO usuarios SET ?'
    const newUsuario= {
        email: req.body.email,
        password: req.body.password,
        admin:'0'
    }

    connection.query(sql, newUsuario, error  =>{
        if(error) throw error;
        res.send ('Cliente creado')
    })
})