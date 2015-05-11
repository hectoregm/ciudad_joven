//Eventos de prueba
var eventos =[
    { name: 'Corona Capital 2015',
      img: '/img/corona2015.jpg',
      fecha: '11/05/2015',
      lugar: '4ta Curva Hnos Rodriguez',
      descripcion: 'Festival de música del género rock con más de 100 bandas repartidas en 4 escenarios',
      id: 0},
    { name: 'Vive Latino 2016',
      img: '/img/Conciertos/VL2016.png',
      fecha: '4/01/2016',
      lugar: 'Foro Sol',
      descripcion: 'Festival de música iberoamericana más importante de latinoamerica con más de 150 bandas en rock en español e inglés',
      id: 1},
    { name: 'Blur Tour 2015',
      img: '/img/Conciertos/blur.jpg',
      fecha: '12/05/2015',
      lugar: 'Plaza Condesa',
      descripcion: "Banda britanica de gran exito en los 90's",
      id: 2},
    { name: 'Tame Impala Tour 2015',
      img: '/img/Conciertos/tameimpala.jpg',
      fecha: '13/05/2015',
      lugar: 'SALA',
      descripcion: 'Banda del tipo rock psicodelico con tener uno de los mejores albumes del 2014',
      id: 3},
    { name: 'Nicolas Jaar Live 2015',
      img: '/img/Conciertos/nicolas.jpg',
      fecha: '14/06/2015',
      lugar: 'Rhodesia',
      descripcion: 'Uno de los maximos exponentes de la musica experimental y electronica de Chicago',
      id: 4},
    { name: 'Muse Tour 2015',
      img: '/img/Conciertos/muse.jpg',
      fecha: '16/07/2015',
      lugar: 'Foro Sol',
      descripcion: 'Banda britanica de rock con grandes éxitos, regresa con un album sorprendente',
      id: 5},
    { name: 'Alabama Shakes Tour 2015',
      img: '/img/Conciertos/alabama.jpg',
      fecha: '17/08/2015',
      lugar: 'Foro Blackberry',
      descripcion: 'Banda neoyorkina con gran influencia de garage y grandes guitarras clásicas',
      id: 6},
    { name: 'Jamie XX Live 2015',
      img: '/img/Conciertos/xx.jpg',
      fecha: '18/09/2015',
      lugar: 'SALA',
      descripcion: 'Joven integrante de la banda The XX se presentara con su album debut electronico con sus proyecto independiente',
      id: 7},
    { name: 'Pearl Jam Tour 2015',
      img: '/img/Conciertos/pearljam.jpg',
      fecha: '19/10/2015',
      lugar: 'Foro Sol',
      descripcion: 'Banda de rock garage dirigida por el gran vocalista Eddie Veder, desde Seattle una de las mejores bandas del siglo',
      id: 8},
    { name: 'Todd Terje Live 2015',
      img: '/img/Conciertos/todd.jpg',
      fecha: '20/11/2015',
      lugar: 'Plaza Condesa',
      descripcion: 'Joven productor de música electronica que ha dejado sorprendido a sus fans, ya que se ha dico que es uno de los mejores eventos de electronica',
      id: 9},
    { name: 'Judas Priest Tour 2015',
      img: '/img/Conciertos/judas.jpg',
      fecha: '21/12/2015',
      lugar: 'Circo Volador',
      descripcion: 'Banda del género metal con grandes exitos como breaking the law y painkiller',
      id: 10},
    { name: 'Enjambre Live 2015',
      img: '/img/Conciertos/enjambre.jpg',
      fecha: '22/01/2015',
      lugar: 'Caradura',
      descripcion: 'Banda méxcana de guadalajara presentando su nuevo album',
      id: 11},
    { name: 'The National Tour 2015',
      img: '/img/Conciertos/national.jpg',
      fecha: '23/02/2015',
      lugar: 'Plaza Condesa',
      descripcion: 'Banda neoyorkina con grandes expectativas, considerando una de las mejores bandas del género rock',
      id: 12},
    { name: 'Caifanes Tour 2015',
      img: '/img/Conciertos/caifanes.jpg',
      fecha: '24/05/2015',
      lugar: 'Foro Sol',
      descripcion: 'Banda Mexicana con gran trayectoria desde los 90s, son clasicos del rock en español',
      id: 13},
    { name: 'Phoenix Live 2015',
      img: '/img/Conciertos/phoenix.jpg',
      fecha: '25/06/2015',
      lugar: 'Palacio de los Deportes',
      descripcion: 'Banda francesa con uno de los mejores albumes del 2014',
      id: 14}
    ];



// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('ciudadjoven', {
    url: "/ciudadjoven",
    abstract: true,
    templateUrl: "templates/ciudadjoven.html",
    controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('ciudadjoven.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/inicio.html',
      }
    }
  })
  
  .state('ciudadjoven.registro', {
    url: '/registro',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/registro.html',
      }
    }
  })

  .state('ciudadjoven.eventos', {
      url: '/eventos',
      views: {
        'tab-eventos': {
          templateUrl: 'templates/eventos.html',
          controller: 'EventosCtrl'
        }
      }
    })

  .state('ciudadjoven.busquedas', {
    url: '/busquedas',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/index.html',
      }
    }
  })

  .state('ciudadjoven.artista', {
    url: '/artista',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/artista.html',
        controller: 'EventosCtrl'
      }
    }
  })

  .state('ciudadjoven.banda', {
    url: '/banda',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/banda.html',
             controller: 'EventosCtrl'
      }
    }
  })

  .state('ciudadjoven.genero', {
    url: '/genero',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/genero.html',
             controller: 'EventosCtrl'
      }
    }
  })


  .state('ciudadjoven.nombre', {
    url: '/nombre',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/nombre.html',
             controller: 'EventosCtrl'
      }
    }
  })

  .state('ciudadjoven.localidad', {
    url: '/localidad',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/localidad.html',
             controller: 'EventosCtrl'
      }
    }
  })


   .state('ciudadjoven.fecha', {
    url: '/fecha',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/fecha.html',
             controller: 'EventosCtrl'
      }
    }
  })

  .state('ciudadjoven.conf', {
    url: '/configuraciones',
    views: {
      'tab-conf': {
        templateUrl: 'templates/config.html',
      }
    }
  })

  .state('ciudadjoven.conf_user', {
    url: '/configuraciones_usuario',
    views: {
      'tab-conf': {
        templateUrl: 'templates/config_user.html',
      }
    }
  })

.state('ciudadjoven.evento', {
    url: '/eventos/:eventoId',
    views:{
      'tab-eventos': {
        templateUrl: "templates/evento.html",
        controller: 'EventoCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/ciudadjoven/inicio');

});

