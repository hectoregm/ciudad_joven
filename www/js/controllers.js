var app = angular.module('starter.controllers', []);

<<<<<<< HEAD
app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
=======
app.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $window, User) {
>>>>>>> bd6d919d12fc162b0848054f76cccd9b3c0721a3
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.register = function() {
      console.log("En el callback register");
      $state.go("ciudadjoven.registro");
    }
    
    $scope.logout = function() {
      User.destroySession();
      $window.location.href = 'index.html';
    }

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            User.auth($scope.loginData.username, $scope.loginData.password);
            $scope.closeLogin();
        }, 1000);
    };
});

app.controller('EventosCtrl', function($scope,$stateParams,$timeout){
	$scope.eventos = eventos.slice(0,15);
	$scope.haveMoreData = true;
	
	$scope.loadMore = function() {
		$timeout(function(){
			$scope.eventos = $scope.eventos.concat(eventos.slice(0,15));
			$scope.$broadcast('scroll.infiniteScrollcomplete');
		}, 2000);
	};
});

<<<<<<< HEAD
app.controller('EventoCtrl', function($scope, $stateParams, $timeout){
=======
app.controller('EventoCtrl', function($scope, $stateParams, $timeout, $rootScope, User){
>>>>>>> bd6d919d12fc162b0848054f76cccd9b3c0721a3
  $scope.evento = eventos[$stateParams.eventoId];
  $scope.event = {};
  $scope.event.txtcomment = ''
  $scope.comments = [];
  User.checkSession();
  console.log(User);
  console.log(User.email);
  $scope.user = User;
  
  console.log($scope.user.email);
  
  $scope.createComment = function() {
    console.log($scope);
    console.log("Crear comentario");
    if($scope.event.txtcomment != ''){
      console.log("Comentario no vacio");
      console.log($scope.comments);
      console.log($scope.event.txtcomment);
      $scope.comments.push($scope.event.txtcomment);
      $scope.event.txtcomment = '';
    }
  }
  
  $scope.remItem = function($index){
    console.log("Mostrar");
    $scope.comment.splice($index,1);
  }
});


app.controller('BusquedaCtrl',function($scope,$stateParams,$timeout){
    $scope.eventos = eventos.slice(0,15);
    $scope.haveMoreData = true;
    
    $scope.loadMore = function() {
        $timeout(function(){
            $scope.eventos = $scope.eventos.concat(eventos.slice(0,15));
            $scope.$broadcast('scroll.infiniteScrollcomplete');
        }, 2000);
    };
});

app.controller('BusquedaCtrl',function($scope,$stateParams,$timeout){
$scope.evento = eventos[$stateParams.eventoId];
});

/**
app.controller("EventoCtrl", function($scope, $cordovaSocialSharing){
	$scope.shareT = function(message, image, link){
		alert("hola");
		$cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error){
            alert("Cannot share on Twitter");
        });
	}
});

*/















