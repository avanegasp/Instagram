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
    empty(main).appendChild(template);
  })
