'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource',
  function($resource){
    return $resource('photo/:season.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    return $resource('music/list.json', {}, {});
  }])

.factory('Post', ['$resource',
  function($resource){
    return $resource('post/:pid.json', {}, {});
  }])

.factory('Category', ['$resource',
  function($resource){
    return $resource('post/categories.json', {}, {});
  }]);