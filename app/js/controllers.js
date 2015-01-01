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
	$scope.music = {state: 'pause', current: 0};
	$scope.music.list = Music.query(function() {
		for (var i = $scope.music.list.length - 1; i >= 0; i--) {
			$scope.music.list[i].id = i;
		};
		document.getElementById('audio_mp3').src = $scope.music.list[0].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[0].ogg;
		jQuery('#audio_audio').load().bind('ended', function(){
		    $scope.musicPlayNext();
		})
		.bind('playing', function(){
		    $scope.music.state = 'play';
		})
		.bind('waiting', function(){
		    $scope.music.state = 'loading';
		});
	});

	$scope.musicPlayPause = function(id) {
		if (typeof id == 'undefined' || id == $scope.music.current) {
			if ($scope.music.state == 'play') {
				$scope.music.state = "pause";
				document.getElementById('audio_audio').pause();
			} else {
				$scope.music.state = "play";
				document.getElementById('audio_audio').play();
			}
		} else {
			$scope.musicPlay(id);
		}
	}

	$scope.musicPlay = function(id) {
		$scope.music.current = id;
		document.getElementById('audio_mp3').src = $scope.music.list[$scope.music.current].mp3;
		document.getElementById('audio_ogg').src = $scope.music.list[$scope.music.current].ogg;
		jQuery('#audio_audio').load();
		document.getElementById('audio_audio').play();
		$scope.music.state = "play";
	}

	$scope.musicPlayNext = function() {
		$scope.musicPlay(($scope.music.current + 1) % $scope.music.list.length);		
	}
}])

.controller('PostlistCtrl', ['$scope', '$routeParams', '$translate', 'Post', 'Category', function($scope, $routeParams, $translate, Post, Category) {
	$scope.categories = Category.get(function(categories) {
		$scope.category = categories[$routeParams.category+'_'+$translate.use()];
	});
	Post.query({pid: $routeParams.category, cid: $routeParams.category}, function(posts) {
		for (var i = posts.length - 1; i >= 0; i--) {
			if (!posts[i].link) {
				posts[i].link = "#/post/"+$routeParams.category+"/"+posts[i].id;
			}
		};
		$scope.posts = posts;
	});	
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