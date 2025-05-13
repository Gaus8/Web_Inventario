import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const generarTokenVerificacion = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const enviarCorreoVerificacion = async (usuario, token) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'pruebasCdisfruta@gmail.com',
      pass: 'oxdlbhjcrqpfziuj'
    }
  });

  const verificationUrl = `http://localhost:5000/validacion/${token}`;

  const mailOptions = {
    from: '"Tu Aplicación" <pruebascdisfruta@gmail.com>',
    to: usuario.email,
    subject: 'Verifica tu cuenta',
    html: `
      <p>Hola ${usuario.name},</p>
      <p>Gracias por registrarte. Por favor verifica tu cuenta haciendo clic en el siguiente enlace:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
      <p>Este enlace es válido por 24 horas.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
