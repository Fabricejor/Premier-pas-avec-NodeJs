const  path  = require('path');
const { attachment, contentType } = require('express/lib/response');
var nodemailer = require('nodemailer');
//!la moitié des commentaire vient du script officiel de nodemailler
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "senderemail@gmail.com",
      pass: "MOTDEPASSDAPPLICATION", //! ON utilise un mot de pass d'applications pas notre mot de passe personels
    },
    ignoreTLS: true, // Ignorer TLS (Transport Layer Security)
  tls: {
    // Options TLS
    rejectUnauthorized: false // Désactiver la vérification du certificat SSL
  }
  });

  const mailOptions ={
    from: {
        name:'Test NodeJS',
        adress: "senderemail@gmail.com",
    }, // sender address
    to: "emaildureceveur@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world</b>", // html body
    attachments: [ // les pieces jointes
        {
            filename: 'Itadori.jpg',
            path : path.join(__dirname,'Itadori.jpg'),
            contentType : 'image/jpg',
        }
    ]
  }

  const sendMail = async (transporter,mailOptions) =>{
    try {
        await transporter.sendMail(mailOptions);
        console.log("mail envoyé");
    } catch (error) {
        console.log(error);
    }
  }
  sendMail(transporter,mailOptions);