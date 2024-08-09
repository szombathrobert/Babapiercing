const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "elite.serverkraft.hu",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "info@babapiercing.hu",
    pass: "Jw^v1s393", // cseréld ki a jelszóra
  },
});

app.post("/send", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // A feladó neve és email címe
    to: "info@babapiercing.hu",
    subject: subject, // Az űrlapban megadott tárgy
    text: `Név: ${name}\nEmail: ${email}\nTelefonszám: ${phone}\nÜzenet: \n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .send("Hiba az email küldése során!: " + error.message);
    }
    res.status(200).send("Email sikeresen elküldve!: " + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
