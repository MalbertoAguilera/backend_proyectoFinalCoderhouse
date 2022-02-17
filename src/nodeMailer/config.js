const { createTransport } = require("nodemailer");

const TEST_MAIL = "mylene.oconner99@ethereal.email"

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "ZFbCnnUqBVkyFDWhBK",
  },
});

const mailOptions = {
      from:"servidor node JS",
      to: TEST_MAIL,
      subject:'mail de prueba',
      html:'<h1>NODEMAILER</h1>'
}

module.exports = {transporter, mailOptions};