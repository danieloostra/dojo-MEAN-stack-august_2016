var app =angular.module('friends', ['ngRoute'])
app.config(function($routeProvider){
		$routeProvider
			.when('/friends',{
				templateUrl: 'partials/index.html',
				controller: 'indexController'
			})
			.when('/friends/new',{
				templateUrl: 'partials/new.html',
				controller: 'newController'
			})
			.when('/friends/:id',{
				templateUrl: 'partials/show.html',
				controller: 'showController'
			})
			.when('/friends/:id/edit',{
				templateUrl: 'partials/edit.html',
				controller: 'editController'
			})
			.otherwise({
				redirectTo:'/friends'
			})
	})
