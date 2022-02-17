const twilio = require('twilio');

const accountSid = 'AC639cb1835feebccfeb6ac73edfcba029';
const authToken = 'bfdf6ca697fe5cf756d150ed59654058';

const client = twilio(accountSid, authToken);

const options = {
      body:'Hola soy un wtsp desde node JS',
      from:'whatsapp:+14155238886',
      to:'whatsapp:+5491130759533'
}

module.exports = {client, options};