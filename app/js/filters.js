'use strict';

angular.module('baikalApp.filters', ['ngResource'])

.filter('translate_res', ['$translate', function($translate) {
  return function(input) {
    return input.res[input.attr+'_'+$translate.use()];
  };
});