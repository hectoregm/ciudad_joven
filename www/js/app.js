//Eventos de prueba
var eventos =[
    { name: 'Corona Capital 2015',
      img: '/img/license-to-ill.jpg',
      fecha: '11/05/2015',
      lugar: '4ta Curva Hnos Rodriguez',
      descripcion: 'Festival de música del género rock con más de 100 bandas repartidas en 4 escenarios',
      id: 0},
    { name: 'Vive Latino 2016',
      img: '../img/license-to-ill.jpg',
      fecha: '4/01/2016',
      lugar: 'Foro Sol',
      descripcion: 'Festival de música iberoamericana más importante de latinoamerica con más de 150 bandas en rock en español e inglés',
      id: 1},
    { name: 'Blur Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 2},
    { name: 'Tame Impala Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 3},
    { name: 'Nicolas Jaar Live 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 4},
    { name: 'Muse Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 5},
    { name: 'Alabama Shakes Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 6},
    { name: 'Jamie XX Live 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 7},
    { name: 'Pearl Jam Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 8},
    { name: 'Todd Terje Live 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 9},
    { name: 'Judas Priest Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 10},
    { name: 'Enjambre Live 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 11},
    { name: 'The National Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 12},
    { name: 'Caifanes Tour 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
      id: 13},
    { name: 'Phoenix Live 2015',
      img: '../img/license-to-ill.jpg',
      fecha: '',
      lugar: '',
      descripcion: '',
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
      }
    }
  })

  .state('ciudadjoven.banda', {
    url: '/banda',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/banda.html',
      }
    }
  })

  .state('ciudadjoven.genero', {
    url: '/genero',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/genero.html',
      }
    }
  })


  .state('ciudadjoven.nombre', {
    url: '/nombre',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/nombre.html',
      }
    }
  })

  .state('ciudadjoven.localidad', {
    url: '/localidad',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/localidad.html',
      }
    }
  })


   .state('ciudadjoven.fecha', {
    url: '/fecha',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busquedas/fecha.html',
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

