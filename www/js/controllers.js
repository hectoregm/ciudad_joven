var app = angular.module('starter.controllers', []);


app.controller('EventosCtrl', function($scope,$timeout){
	$scope.eventos = eventos.slice(0,14);
	$scope.haveMoreData = true;
	$scope.loadMore = function() {
		$timeout(function(){
			$scope.eventos = $scope.eventos.concat(eventos.slice(0,14));
			$scope.$broadcast('scroll.infiniteScrollcomplete');
		}, 2000);
	};
});

app.controller('EventoCtrl', function($scope, $stateParams, $timeout){
	$scope.evento = eventos[$stateParams.eventoId];
});


