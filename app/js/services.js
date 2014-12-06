'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource',
  function($resource){
    return $resource('photo/:season-:lang.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    return $resource('music/list.json', {}, {});
  }])

.factory('Post', ['$resource',
  function($resource){
    return $resource('post/:pid-:lang.json', {}, {});
  }])

.factory('Category', ['$resource',
  function($resource){
    return $resource('post/categories-:lang.json', {}, {});
  }]);