  var page = require('page');
  var yo = require('yo-yo')

  var main = document.getElementById('main-container')

  page('/', function(ctx, next){
    // main.innerHTML = 'Home <a href="/signup">Signup</a>';

  })

  page('/signup', function(ctx, next){
    // main.innerHTML = 'Signup <a href="/">Home</a>';
    var main = document.getElementById('main-container')
  })

  page();
