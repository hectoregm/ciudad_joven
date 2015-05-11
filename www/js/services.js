var app = angular.module('starter.services', []);

app.factory('User', function() {
  var o = {
    username: false,
    session_id: false,
    firstname: false,
    flastname: false,
    llastname: false,
    events: []
  };
  
  o.auth = function(username, password) {
    return true;
  }
  
  o.register = function(userData) {
    console.log('Doing registration', userData);
    console.log("Registration successful");
    
    return true;
  }
  
  return o;
});