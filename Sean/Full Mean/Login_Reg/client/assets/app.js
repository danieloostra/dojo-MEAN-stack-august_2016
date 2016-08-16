var app = angular.module('Login', ['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
		.when('/welcome', {
			templateUrl: 'partials/welcome.html',
			controller: 'userController'
		})
		.when('/success',{
			templateUrl: 'partials/success.html',
			controller: 'successController'
		})
		.otherwise({
			redirectTo:'/welcome'
		})
})