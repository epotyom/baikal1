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
	$scope.music = Music;
	
	var updateScope = function () {
		$scope.music_state = Music.mstate;
		$scope.music_current = Music.current;
		$scope.$digest();
		console.log('updateScope '+$scope.music_state);
	}

	updateScope();

  	Music.registerObserverCallback(updateScope);

	$scope.logState = function() {
		console.log(Music.mstate);
		Music.mstate = "test";
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