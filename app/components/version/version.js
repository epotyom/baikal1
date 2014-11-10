'use strict';

angular.module('baikalApp.version', [
  'baikalApp.version.interpolate-filter',
  'baikalApp.version.version-directive'
])

.value('version', '0.1');
