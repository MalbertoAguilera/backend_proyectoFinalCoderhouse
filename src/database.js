const mogoose = require('mongoose');
const {mongoDB} = require('./keys');

mogoose.connect(mongoDB.URI, {})
      .then( db => console.log('Database is conected'))
      .catch(err => console.log(err))