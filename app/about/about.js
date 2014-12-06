'use strict';

angular.module('baikalApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/about/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  })
  .when('/post/:pid', {
    templateUrl: 'post/view.html',
    controller: 'PostviewCtrl',
  });
}])

.controller('PostlistCtrl', ['$scope', '$routeParams', 'Post', 'Category', function($scope, $routeParams, Post, Category) {
	$scope.categories = Category.get(function(category) {
		$scope.category = $scope.categories['family'];
	});
	$scope.posts = Post.query({pid: $routeParams.category});
}])

.controller('PostviewCtrl', ['$scope', '$routeParams', 'Post', 'Category', function($scope, $routeParams, Post, Category) {
	$scope.post = Post.get({pid: $routeParams.pid});
  concole.log($scope.post);
}]);