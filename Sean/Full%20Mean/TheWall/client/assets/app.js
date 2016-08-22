var app = angular.module('Wall', ['ngRoute', 'ngCookies'])
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/username.html',
			controller: 'usernameController'
		})
		.when('/thewall', {
			templateUrl: 'partials/thewall.html',
			controller: 'thewallController'
		})
		.otherwise({
			redirectTo: '/'
		})
})