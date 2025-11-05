import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const generarTokenVerificacion = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const enviarCorreoVerificacion = async (usuario, token) => {
  try {
    // Configuración SMTP de Brevo
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false, // true para 465, false para 587
      auth: {
        user: process.env.EMAI_USER, // Tu email de registro en Brevo
        pass: process.env.BREVO_SMTP_PASSWORD // Tu contraseña SMTP de Brevo
      }
    });

    const verificationUrl =`https://inventario-cdisfruta.netlify.app/validacion/${token}`

    const mailOptions = {
      from: '"SIECU - CDISFRUTA" <contact@brevo.com>', // Usa un dominio de Brevo
      to: usuario.email,
      subject: 'Confirmación de correo electrónico - Registro en CDISFRUTA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Bienvenido a SIECU - CDISFRUTA</h2>
          <p>Estimado(a) <b>${usuario.name}</b>,</p>
          <p>Gracias por registrarse en nuestra plataforma <b>SIECU</b>.</p>
          <p>Para completar su proceso de registro y activar su cuenta, haga clic en el siguiente enlace:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 5px; display: inline-block;">
              Verificar Mi Cuenta
            </a>
          </div>
          <p>Si usted no realizó este registro, puede ignorar este mensaje.</p>
          <br>
          <p><b>Equipo de Soporte – SIECU</b></p>
        </div>
      `
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    console.log(`📩 Correo de verificación enviado a ${usuario.email}`);
    
    return true;

  } catch (error) {
    console.error("❌ Error al enviar correo de verificación:", error.message);
    console.error("Detalles del error:", error);
    return false;
  }
};