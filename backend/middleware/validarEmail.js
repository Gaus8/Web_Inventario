import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const generarTokenVerificacion = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const enviarCorreoVerificacion = async (usuario, token) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'pruebasCdisfruta@gmail.com',
        pass: 'oxdlbhjcrqpfziuj' // Contraseña de aplicación
      }
    });

    const verificationUrlRender = `https://inventario-cdisfruta.netlify.app/validacion/${token}`;
    const verificationUrlLocal = `http://localhost:5173/validacion/${token}`;

    const mailOptions = {
      from: '"SIECU - Plataforma gestionada a CDISFRUTA" <pruebasCdisfruta@gmail.com>',
      to: usuario.email,
      subject: 'Confirmación de correo electrónico - Registro en CDISFRUTA',
      html: `
        <p>Estimado(a) ${usuario.name}</p>
        <p>Gracias por registrarse en <b>SIECU</b>.</p>
        <p>Para completar su proceso de registro y activar su cuenta, haga clic en el siguiente enlace:</p>
        <a href="${verificationUrlRender}">${verificationUrlRender}</a>
        <p>Si usted no realizó este registro, puede ignorar este mensaje.</p>
        <br>
        <p><b>Equipo de Soporte – SIECU</b></p>
      `
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    console.log(`📩 Correo de verificación enviado a ${usuario.email}`);

  } catch (error) {
    console.error("❌ Error al enviar correo de verificación:", error.message);
    // No lanzamos error para no romper el flujo del registro
  }
};
