const { createTransport } = require("nodemailer");
const { nodemailer } = require("./keys");

const transporter = createTransport({
  service: "gmail",
  host: nodemailer.host,
  auth: {
    user: nodemailer.correo,
    pass: nodemailer.password,
  },
});

const mailOptions = {
  from: "E-commerce Aguilera",
  to: nodemailer.correo,
  subject: "",
  html: "",
};

module.exports = { transporter, mailOptions };
