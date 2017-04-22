  var page = require('page');
  var yo = require('yo-yo');
  var empty = require('empty-element');

  var main = document.getElementById('main-container')

  page('/', function(ctx, next){
    main.innerHTML = 'Home <a href="/signup">Signup</a>';

  })

  page('/signup', function(ctx, next){
    // main.innerHTML = 'Signup <a href="/">Home</a>';
    // var main = document.getElementById('main-container')
    var el = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="iphone2.jpg" alt="Iphone">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="Instagram">InstaFlash</h1>
                  <form class="signup-form">
                    <h2>Regístrate para subir fotos de animales</h2>
                    <div class="section">
                      <a class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
                      <a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                        <input type="email" name="email" placeholder="Correo ELectrónico"/>
                        <input type="text" name="name" placeholder="Nombre completo"/>
                        <input type="text" name="username" placeholder="Nombre de usuario"/>
                        <input type="password" name="password" placeholder="Contraseña"/>
                        <button class="btn waves-effect waves-light btn-signup" type="submit" name="button">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    empty(main).appendChild(el);
  })

  page();
