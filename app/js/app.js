'use strict';

// Declare app level module which depends on views, and components
angular.module('baikalApp', [
  'ngRoute',
  'baikalApp.home',
  'baikalApp.about',
  'baikalApp.photo',
  'baikalApp.version',
  'baikalApp.services',
  'baikalApp.controllers',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
