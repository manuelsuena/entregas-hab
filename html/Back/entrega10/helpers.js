require('dotenv').config();

const { format } = require('date-fns');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs-extra');
const uuid = require('uuid');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');

const imageUploadPath = path.join(__dirname, process.env.UPLOADS_DIR);

// Formatear una fecha a la forma de la DB
function formatDateToDB(date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss');
}

// Se duarda una foto y se obtiene el nombre del archivo
async function processAndSavePhoto(uploadedImage) {
  // Nombre de archivo aleatorio para guardar
  const savedFileName = `${uuid.v1()}.jpg`;

  
// Nos Aseguramos de que exista la ruta de carga
  await fs.ensureDir(imageUploadPath);

  // Procesando la  imagen
  const finalImage = sharp(uploadedImage.data);

  // Checkeamos el tamaño de la imagen
  const imageInfo = await finalImage.metadata();

  // Si la imagen es más ancha que 500 px, cambie su tamaño
  if (imageInfo.width > 500) {
    finalImage.resize(500);
  }

  // guarda la imagen
  await finalImage.toFile(path.join(imageUploadPath, savedFileName));

  return savedFileName;
}

// Se elimina  la imagen
async function deletePhoto(imagePath) {
  await fs.unlink(path.join(imageUploadPath, imagePath));
}

// Cadena al azar

function randomString(size = 20) {
  return crypto.randomBytes(size).toString('hex').slice(0, size);
}

// Send email
async function sendEmail({ email, title, content }) {
  sgMail.setApiKey(process.env.SENDGRID_KEY);

  const msg = {
    to: email,
    from: 'berto@ber.to',
    subject: title,
    text: content,
    html: `<div>
      <h1>Validate your email</h1>
      <p>${content}</p>  
    </div>`
  };

  await sgMail.send(msg);
}

function generateError(message, code) {
  const error = new Error(message);
  if (code) error.httpCode = code;
  return error;
}

module.exports = {
  formatDateToDB,
  processAndSavePhoto,
  deletePhoto,
  randomString,
  sendEmail,
  generateError
};
