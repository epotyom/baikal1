'use strict';

angular.module('baikalApp.controllers', ['ngRoute'])

.controller('HeaderCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

}])
.controller('FooterCtrl', ['$scope', '$translate', 'Music', function($scope, $translate, Music) {
	$scope.languageChange = function (key) {
	    $translate.use(key);
	};

	$scope.music = {action: 'play', current: 0};
	$scope.music.list = Music.query(function() {
		document.getElementById('audio_mp3').src = $scope.music.list[0].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[0].ogg;
		jQuery('#audio_audio').load().bind('ended', function(){
		    playNext();
		});
	});

	$scope.musicPlayPause = function(action) {
		if (action == 'play') {
			$scope.music.action = "pause";
			document.getElementById('audio_audio').play();
		} else {
			$scope.music.action = "play";
			document.getElementById('audio_audio').pause();
		}
	}
	var playNext = function() {
		$scope.music.current = ($scope.music.current + 1) % $scope.music.list.length;
		document.getElementById('audio_mp3').src = $scope.music.list[$scope.music.current].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[$scope.music.current].ogg;
		jQuery('#audio_audio').load();
		document.getElementById('audio_audio').play();
	}
}]);