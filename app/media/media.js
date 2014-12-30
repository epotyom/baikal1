'use strict';

angular.module('baikalApp.media', ['ngRoute'])

.controller('MediaCtrl', ['$scope', '$routeParams', 'Media', function($scope, $routeParams, Media) {
	$scope.medias = Media.query({pid: "media"});
}]);