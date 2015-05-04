angular.module('starter.controllers', [])

.controller('EventosCtrl', function($scope,$timeout){
	$scope.eventos = eventos.slice(0,14);
	$scope.haveMoreData = true;
	$scope.loadMore = function() {
		$timeout(function(){
			$scope.eventos = $scope.eventos.concat(eventos.slice(0,14));
			$scope.$broadcast('scroll.infiniteScrollcomplete');
		}, 2000);
	};	
});


