'use strict';

angular.module('baikalApp.controllers', ['ngRoute'])

.controller('HeaderCtrl', ['$scope', '$translate', '$routeParams', function($scope, $translate, $routeParams) {
	if ($translate.use() == 'ru') {
    	$scope.other_lang = 'en';
    } else {
    	$scope.other_lang = 'ru';
    }
	$scope.languageChange = function () {
	    $translate.use($scope.other_lang);
	    if ($scope.other_lang == 'ru') {
	    	$scope.other_lang = 'en';
	    } else {
	    	$scope.other_lang = 'ru';
	    }
	};
}])

.controller('MusicCtrl', ['$scope', 'Music', function($scope, Music) {
	$scope.music = {action: 'play', current: 0};
	$scope.music.list = Music.query(function() {
		document.getElementById('audio_mp3').src = $scope.music.list[0].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[0].ogg;
		jQuery('#audio_audio').load().bind('ended', function(){
		    $scope.musicPlayNext();
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

	$scope.musicPlay = function(id) {
		$scope.music.current = id;
		document.getElementById('audio_mp3').src = $scope.music.list[$scope.music.current].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[$scope.music.current].ogg;
		jQuery('#audio_audio').load();
		document.getElementById('audio_audio').play();
	}

	$scope.musicPlayNext = function() {
		$scope.musicPlay(($scope.music.current + 1) % $scope.music.list.length);		
	}
}])

.controller('PostlistCtrl', ['$scope', '$routeParams', '$translate', 'Post', 'Category', function($scope, $routeParams, $translate, Post, Category) {
	$scope.categories = Category.get(function(categories) {
		$scope.category = categories[$routeParams.category+'_'+$translate.use()];
	});
	$scope.posts = Post.query({pid: $routeParams.category, cid: $routeParams.category});
	for (var i = $scope.posts - 1; i >= 0; i--) {
		if (!$scope.posts[i].link) {
			$scope.posts[i].link = "#/post/"+$routeParams.category+"/"+$scope.posts[i].id;
		}
	};
}])

.controller('PostviewCtrl', ['$scope', '$routeParams', 'Post', function($scope, $routeParams, Post) {
	$scope.post = Post.get({pid: $routeParams.pid, cid: $routeParams.cid});
}])

.controller('ContactsCtrl', ['$scope', 'Post', '$translate', function($scope, Post, $translate) {
  
}])

.controller('LeagueCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.post = Post.get({pid: "league", cid: "league"});
}])

.controller('RecordsCtrl', ['$scope', '$routeParams', 'Media', function($scope, $routeParams, Media) {
	$scope.medias = Media.query({pid: "records"});
	$scope.title = "RECORDS";
}])

.controller('VolunteersCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.post = Post.get({pid: "volunteers", cid: "volunteers"});
}]);