var app = angular.module('starter.controllers', ['ngCordova']);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

app.controller('EventosCtrl', function($scope,$timeout){
	$scope.eventos = eventos.slice(0,12);
	$scope.haveMoreData = true;
	
	$scope.loadMore = function() {
		$timeout(function(){
			$scope.eventos = $scope.eventos.concat(eventos.slice(0,12));
			$scope.$broadcast('scroll.infiniteScrollcomplete');
		}, 2000);
	};
});

app.controller('EventoCtrl', function($scope, $stateParams, $timeout){
	$scope.evento = eventos[$stateParams.eventoId];
});



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
















