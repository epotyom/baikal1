'use strict';

angular.module('baikalApp.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/post/:pid', {
    templateUrl: 'post/view.html',
    controller: 'PostviewCtrl',
  })
  .when('/about/league', {
    templateUrl: 'post/view.html',
    controller: 'LeagueCtrl',
  })
  .when('/about/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  })  
  .when('/contacts', {
    templateUrl: 'post/contacts.html',
    controller: 'ContactsCtrl',
  })
  .when('/news/media', {
    templateUrl: 'media/media.html',
    controller: 'MediaCtrl',
  })
  .when('/news/expeditions', {
    templateUrl: 'expeditions/main.html',
    controller: 'ExpeditionsCtrl',
  })
  .when('/news/records', {
    templateUrl: 'media/media.html',
    controller: 'RecordsCtrl',
  })
  .when('/news/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  });
}]);