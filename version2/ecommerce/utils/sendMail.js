const { transporter, mailOptions } = require("../config/nodemailer");

const sendMailNewUser = async (user) => {
  try {
    mailOptions.subject = "Nuevo Usuario REGISTRADO!!!!!!!";
    mailOptions.html = `<div><h1>Se ha creado un nuevo Usuario</h1></div>
                        <div>
                              <ul>
                                    <li>ID: ${user._id}</li>
                                    <li>Correo: ${user.email}</li>
                                    <li>Rol: ${user.role}</li>
                              </ul>
                        </div>`;
    let info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

const sendMailSuccessOrder = async (order) => {
  try {
    mailOptions.subject = "NUEVO PEDIDO RECIBIDO";
    mailOptions.html = `<div><h1>Su pedido ha sido recibido</h1></div>
                            <div>
                                  <ul>
                                        <li>ID: ${order._id}</li>
                                        <li>Correo: ${order.email}</li>
                                        <li>${JSON.stringify(order.cartToArray)}</li>
                                  </ul>
                            </div>`;
    let info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendMailNewUser, sendMailSuccessOrder};
