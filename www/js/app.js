//Eventos de prueba
var eventos =[
    { name: 'Corona Capital 2015',
      img: '../img/license-to-ill.jpg',
      id: 0},
    { name: 'Vive Latino 2015',
      img: '../img/license-to-ill.jpg',
      id: 1},
    { name: 'Blur Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 2},
    { name: 'Tame Impala Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 3},
    { name: 'Nicolas Jaar Live 2015',
      img: '../img/license-to-ill.jpg',
      id: 4},
    { name: 'Muse Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 5},
    { name: 'Alabama Shakes Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 6},
    { name: 'Jamie XX Live 2015',
      img: '../img/license-to-ill.jpg',
      id: 7},
    { name: 'Pearl Jam Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 8},
    { name: 'Todd Terje Live 2015',
      img: '../img/license-to-ill.jpg',
      id: 9},
    { name: 'Judas Priest Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 10},
    { name: 'Enjambre Live 2015',
      img: '../img/license-to-ill.jpg',
      id: 11},
    { name: 'The National Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 12},
    { name: 'Caifanes Tour 2015',
      img: '../img/license-to-ill.jpg',
      id: 13},
    { name: 'Phoenix Live 2015',
      img: '../img/license-to-ill.jpg',
      id: 14}
    ];



// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
    templateUrl: "templates/ciudadjoven.html"
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

  .state('ciudadjoven.busqueda', {
    url: '/busqueda',
    views: {
      'tab-busqueda': {
        templateUrl: 'templates/busqueda.html',
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
    url: '/eventos/:eventoName',
    views:{
      'tab-eventos': {
        templateUrl: "templates/evento.html"
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/ciudadjoven/inicio');

});

