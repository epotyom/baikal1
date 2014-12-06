'use strict';

angular.module('baikalApp.photo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photo/:season', {
    templateUrl: 'photo/photo.html',
    controller: 'PhotoCtrl'
  });
}])

.controller('PhotoCtrl', ['$scope', '$routeParams', 'Photos', function($scope, $routeParams, Photos) {
	$scope.photos = Photos.query({season: $routeParams.season});
}]);