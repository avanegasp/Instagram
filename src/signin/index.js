  var page = require('page');
  var empty = require('empty-element');
  var template = require('./template');


  page('/signin', function(ctx, next){
    // main.innerHTML = 'Signup <a href="/">Home</a>';
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
  })
