  var express = require('express');

  var app = express();

  app.set('view engine', 'pug');

  app.use(express.static('public'));

  app.get('/', function(req, res){
    res.render('index',{ title: 'InstaFlash'});
  })

  app.get('/signup', function(req, res){
    res.render('index', { title: 'InstaFlash - Signup'});
  })

  app.get('/signin', function(req, res){
    res.render('index', { title: 'InstaFlash - Signin'});
  })

  app.get('/api/pictures', function(req, res){
    var pictures = [
      {
        user:{
          username:'oliveins',
          avatar: 'https://avatars3.githubusercontent.com/u/7864798?v=3&u=74b94ad7c746488e9cf905d9b3ca81c544f86fdd&s=400'
        },
        url: 'office.jpg',
        likes:0,
        liked: true,
        createdAt: new Date()
      },
      {
        user:{
          username:'oliveins',
          avatar: 'https://avatars3.githubusercontent.com/u/7864798?v=3&u=74b94ad7c746488e9cf905d9b3ca81c544f86fdd&s=400'
        },
        url: 'office.jpg',
        likes:1,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
      },
    ];

    setTimeout(function (){
      res.send(pictures);
    },2000)
  })

  app.listen(3000, function(err){
    if(err) return console.log('hubo un error'), process.exit(1); //se pasa un número diferente de cero, para indicar que hay un Error

    console.log('Instaflash escuchando en el puerto 3000')
  })
