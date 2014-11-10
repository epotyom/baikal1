'use strict';

angular.module('baikalApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope',function($scope) {
	$scope.home_background = {'background-image': 'url(images/bg_header.jpg)'};
	jQuery('#mainButton').popover();
	$scope.mainButtonClick = function() {

	}
}]);