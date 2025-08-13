const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tonadresse@gmail.com',
      pass: 'TON_MOT_DE_PASSE_APPLICATION' // Jamais ton vrai mot de passe Gmail !
    }
  });

  let mailOptions = {
    from: email,
    to: 'tonadresse@gmail.com',
    subject: `Message de ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message envoyé');
  } catch (err) {
    res.status(500).send('Erreur lors de l\'envoi');
  }
});

app.listen(5000, () => console.log('Serveur backend sur le port 5000'));