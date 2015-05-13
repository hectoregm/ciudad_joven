var app = angular.module('starter.services', ['ionic.utils']);

app.factory('User', function($q, $localstorage) {
  var o = {
    email: false,
    password: false,
    firstname: false,
    flastname: false,
    llastname: false,
    alerts: false,
    events: {},
  };
  
  var users = {};
  
  o.saveUsers = function() {
    console.log("Save users");
    $localstorage.setObject('users', users);
  }
  
  o.getUsers = function() {
    console.log("Get users");
    var data = $localstorage.getObject('users');
    if (data) {
      users = $localstorage.getObject('users');
    }
  }
  
 // set session data
  o.setSession = function(userData) {
    console.log("Set session");
    console.log(userData);
    o.email = userData.email;
    o.password = userData.password;
    o.firstname = userData.firstname;
    o.flastname = userData.flastname;
    o.llastname = userData.llastname;
    if (userData.events) {
      o.events = userData.events;
    } else {
      o.events = {};
    }

    // set data in localstorage object
    $localstorage.setObject('user', userData);
  }
  
  o.destroySession = function() {
    $localstorage.setObject('user', {});
    o.email = false;
    o.password = false;
    o.firstname = false;
    o.flastname = false;
    o.llastname = false;
    o.events = {};
  }
  
  o.checkSession = function() {
    var defer = $q.defer();
    
    o.getUsers();
    
    if(o.email) {
      return defer.resolve(true);
    } else {
      console.log("Getting user from localstorage")
      var user = $localstorage.getObject('user');
      
      if (user.email) {
        o.setSession(user);
        return defer.resolve(true);
      } else {
        return defer.resolve(false);
      }
    }
    
    return defer.resolve(falses);
  }
  
  o.auth = function(username, password) {
    o.getUsers();
    if (users[username]) {
      o.setSession(users[username]);
      return true;
    } else {
      return false;
    }
  }
  
  o.register = function(userData) {
    console.log('Doing registration', userData);
    
    users[userData.email] = userData;
    
    o.setSession(userData);
    o.saveUsers();

    console.log("Registration successful");
    
    return true;
  }
  
  o.addEvent = function(event) {
    console.log("Adding event");
    
    o.events[event.id] = event;
    users[o.email] = o;
    $localstorage.setObject('user', o);
    
    var milis = 10 * 1000;
    var date = new Date(Date.now() + milis);
    
    document.addEventListener('deviceready', function () {
      if (window.plugin && o.alerts) {
        window.plugin.notification.local.schedule({
          id:      event.id,
          title:   'Ciudad Joven',
          text: event.name + ' esta próximo',
          at:    date,
        });
      }
    });
    
    o.saveUsers();
  }
  
  o.removeEvent = function(event) {
    console.log("Removing event");
    
    delete o.events[event.id];
    users[o.email] = o;
    $localstorage.setObject('user', o);
    o.saveUsers();
  }
  
  return o;
});
