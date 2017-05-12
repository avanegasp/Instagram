  var yo = require('yo-yo');
  // var landing = require('../landing');
  var translate = require('../translate');

  module.exports = function layout(content){
    return yo`<div class="content">
      ${content}
      </div>`;
  }
