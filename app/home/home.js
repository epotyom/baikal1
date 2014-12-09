'use strict';

angular.module('baikalApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.home_background = {
		'background': 'url(images/bg_header.jpg) no-repeat center center fixed',
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover',
	};
	//jQuery('#mainButton').popover();
	$scope.mainButtonClick = function() {

	}
}]);