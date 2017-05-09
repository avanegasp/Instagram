  var yo = require('yo-yo');



  module.exports = function (pic) {
      return yo `<div class="card">
        <div class="card-image">
          <img class="activator" src="${pic.url}">
        </div>
        <div class="card-content">
          <a href="/user/${pic.user.username}" class="card-title">Card Title>
            <img src="${pic.user.avatar}" class="avatar"/>
            <span class="username">${pic.user.username}</span>
          </a>
            <small class="rigth time"> Hace un día</small>
          <p>
            <a class="left" href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
            <span class="left likes">${pic.likes} Me gusta </span>
          </p>
        </div>
      </div>`;
  }
