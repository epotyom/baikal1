'use strict';

angular.module('baikalApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/post/:pid', {
    templateUrl: 'post/view.html',
    controller: 'PostviewCtrl',
  })
  .when('/about/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  })
  .when('/journey/:category', {
    templateUrl: 'post/list.html',
    controller: 'PostlistCtrl',
  })
  .when('/contacts', {
    templateUrl: 'post/contacts.html',
    controller: 'ContactsCtrl',
  });
}])

.controller('PostlistCtrl', ['$scope', '$routeParams', '$translate', 'Post', 'Category', function($scope, $routeParams, $translate, Post, Category) {
	$scope.categories = Category.get(function(categories) {
		$scope.category = categories[$routeParams.category+'_'+$translate.use()];
	});
	$scope.posts = Post.query({pid: $routeParams.category});
}])

.controller('PostviewCtrl', ['$scope', '$routeParams', 'Post', function($scope, $routeParams, Post) {
	$scope.post = Post.get({pid: $routeParams.pid});
}])

.controller('ContactsCtrl', ['$scope', 'Post', function($scope, Post) {
  $scope.post = Post.get({pid: "contacts"});
}]);