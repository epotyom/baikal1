'use strict';

angular.module('baikalApp.filters', ['ngResource'])

.filter('translate_res', ['$translate', function($translate) {
  return function(input) {
    return input.res[input.attr+'_'+$translate.use()];
  };
}])

.filter('raw_html', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);;