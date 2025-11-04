import Brevo from "@getbrevo/brevo";


export const generarTokenVerificacion = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const enviarCorreoVerificacion = async (usuario, token) => {
  const apiInstance = new Brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY
  );

  const verificationUrl = `https://inventario-cdisfruta.netlify.app/validacion/${token}`;

  const sendSmtpEmail = {
    sender: {
      name: "SIECU - CDISFRUTA",
      email: "pruebascdisfruta2025@gmail.com", // tu Gmail
    },
    to: [
      {
        email: usuario.email,
        name: usuario.name,
      },
    ],
    subject: "Confirmación de correo electrónico - Registro en CDISFRUTA",
    htmlContent: `
      <p>Estimado(a) ${usuario.name},</p>
      <p>Gracias por registrarse en <b>SIECU</b>. Para activar su cuenta, haga clic en el siguiente enlace:</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
      <p>Si no realizó este registro, puede ignorar este mensaje.</p>
      <br>
      <p><b>Equipo de Soporte – SIECU</b></p>
    `,
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Correo de verificación enviado con éxito a", usuario.email);
  } catch (error) {
    console.error("❌ Error enviando correo con Brevo:", error.response?.text || error.message);
  }
};
