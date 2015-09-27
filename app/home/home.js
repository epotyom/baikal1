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
		'background': 'url(images/bg_header.jpg) no-repeat top center fixed',
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover',
	};
	var curmonth = new Date()
	if (curmonth < 4 || curmonth > 11) {
		$scope.journey_button_img = 'jeep';
	} else {
		$scope.journey_button_img = 'sailboat';
	}
	
	//jQuery('#mainButton').popover();
	$scope.mainButtonClick = function() {

	}
}]);