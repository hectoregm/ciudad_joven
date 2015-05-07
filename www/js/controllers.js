var app = angular.module('starter.controllers', []);


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






