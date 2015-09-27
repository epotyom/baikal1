'use strict';

angular.module('baikalApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
  })
  .when('/home-summer', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    data: 'summer'
  })  
  .when('/home-winter', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    data: 'winter'
  });
}])

.controller('HomeCtrl', ['$scope', '$route', function($scope, $route) {
	$scope.home_background = {
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover',
	};
	var curmonth = new Date()
	var is_winter = false;
	if ($route.current.data) {
		if ($route.current.data == 'winter') {
			is_winter = true;
		}
	} else if (curmonth < 4 || curmonth > 11) {
		is_winter = true;
	}
	if (is_winter) {
		$scope.journey_button_img = 'jeep';
		$scope.home_background['background'] = 'url(images/bg_header_winter.jpg) no-repeat top center fixed';
	} else {
		$scope.journey_button_img = 'sailboat';
		$scope.home_background['background'] = 'url(images/bg_header_summer.jpg) no-repeat top center fixed';
	}
	
	//jQuery('#mainButton').popover();
	$scope.mainButtonClick = function() {

	}
}]);