'use strict';

angular.module('baikalApp.photo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photo/:season', {
    templateUrl: 'photo/photo.html',
    controller: 'PhotoCtrl'
  });
}])

.controller('PhotoCtrl', ['$scope', '$routeParams', 'Photos', function($scope, $routeParams, Photos) {
	angular.element(document).ready(function () {
		angular.element("#carousel_photo").swiperight(function() {  
			angular.element("#carousel_photo").carousel('prev');  
		});  
		angular.element("#carousel_photo").swipeleft(function() {  
			angular.element("#carousel_photo").carousel('next');  
		});
	});

	$scope.photos = Photos.query({season: $routeParams.season});
}]);