import Brevo from "brevo";

const brevo = new Brevo(process.env.BREVO_API_KEY);

export const enviarCorreoVerificacion = async (usuario, token) => {
  const verificationUrl = `https://inventario-cdisfruta.netlify.app/validacion/${token}`;

  try {
    await brevo.sendTransacEmail({
      sender: {
        name: "SIECU - CDISFRUTA",
        email: "no-reply@tudominio.com" // mejor que uses un dominio propio
      },
      to: [
        {
          email: usuario.email,
          name: usuario.name
        }
      ],
      subject: "Confirmación de correo electrónico - Registro en CDISFRUTA",
      htmlContent: `
        <p>Estimado(a) ${usuario.name},</p>
        <p>Gracias por registrarse en <b>SIECU</b>. Para activar su cuenta, haga clic en el siguiente enlace:</p>
        <a href="${verificationUrl}">${verificationUrl}</a>
        <p>Si no realizó este registro, puede ignorar este mensaje.</p>
        <br>
        <p><b>Equipo de Soporte – SIECU</b></p>
      `
    });
    console.log("Correo de verificación enviado con éxito a", usuario.email);
  } catch (error) {
    console.error("Error enviando correo con Brevo:", error);
    // Puedes decidir si sigues adelante aunque falle el correo
  }
};