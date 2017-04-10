  var express = require('express');

  var app = express();

  app.set('view engine', 'pug');

  app.use(express.static('public'));

  app.get('/', function(req, res){
    res.render('index');
  })

  app.listen(3000, function(err){
    if(err) return console.log('hubo un error'), process.exit(1); //se pasa un número diferente de cero, para indicar que hay un Error
    console.log('Instaflash escuchando en el puerto 3000')
  })
