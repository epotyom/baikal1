'use strict';

angular.module('baikalApp.anketa', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/anketa', {
    templateUrl: 'forms/anketa.html',
    controller: 'AnketaCtrl'
  });
}])

.controller('AnketaCtrl', ['$scope',function($scope) {
	
}]);