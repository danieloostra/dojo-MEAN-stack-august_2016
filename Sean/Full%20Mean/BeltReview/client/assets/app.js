var app = angular.module('Review', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'indexController'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboardController'
		})
		.when('/topic/:id', {
			templateUrl: 'partials/topic.html',
			controller: 'topicController'
		})
		.when('/user/:id', {
			templateUrl: 'partials/profile.html',
			controller: 'profileController'
		})
		.otherwise({
			redirectTo: '/'
		})
})		