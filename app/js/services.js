'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource', '$translate',
  function($resource, $translate){
    return $resource('photo/:season.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    return $resource('music/list.json', {}, {});
  }])

.factory('Post', ['$resource', '$translate',
  function($resource, $translate){
    return $resource('post/:pid-:lang.json', {lang: $translate.use()}, {});
  }])

.factory('Category', ['$resource', '$translate',
  function($resource, $translate){
    return $resource('post/categories-:lang.json', {lang: $translate.use()}, {});
  }]);