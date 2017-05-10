  // var page = require('page');
  // page('/', function(ctx, next){
  //   var main = document.getElementById('main-container');
  //   main.innerHTML = '<a href="/signup">Signup</a>'
  // })

  var page = require('page');
  var empty = require('empty-element');
  var template = require('./template');
  var title = require('title');

  page('/', function(ctx, next){
    title('InstaFlash');
    // main.innerHTML = 'Signup <a href="/">Home</a>';
    var main = document.getElementById('main-container');

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

    empty(main).appendChild(template(pictures));
  })
