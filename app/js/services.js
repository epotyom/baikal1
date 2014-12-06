'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource', '$translate',
  function($resource, $translate){
    return $resource('photo/:season-:lang.json', {lang: $translate.use()}, {});
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