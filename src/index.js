const express = require('express');
const app = express();

//settings
app.set('port', 3000 || process.env.PORT);

//starting the server
app.listen(app.get('port'), () => {
      console.log('Server on port', app.get('port'));
})