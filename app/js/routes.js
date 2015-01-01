'use strict';

angular.module('baikalApp.routes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/post/:cid/:pid', {
    templateUrl: 'post/view.html',
    controller: 'PostviewCtrl',
  })
  .when('/about/league', {
    templateUrl: 'post/view.html',
    controller: 'LeagueCtrl',
  })
  .when('/about/skype-lessons', {
    templateUrl: 'post/skype-lessons.html',
  })
  .when('/about/yoga', {
    templateUrl: 'post/yoga.html',
  })
  .when('/about/music', {
    templateUrl: 'music/view.html',
    controller: 'MusicCtrl',
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
  })
  .when('/news/records', {
    templateUrl: 'media/media.html',
    controller: 'RecordsCtrl',
  })
  .when('/news/volunteers', {
    templateUrl: 'post/view.html',
    controller: 'VolunteersCtrl',
  })
  .when('/news/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  });
}]);