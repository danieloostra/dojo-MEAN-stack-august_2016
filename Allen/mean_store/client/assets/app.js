var app = angular.module("app", ["ngRoute", "ngCookies", "ngMessages"]);


app.config(function($routeProvider){
	 $routeProvider
      .when('/',{
        templateUrl: '../static/partials/login.html',
        controller: 'userController'
      })
      .when('/register',{
        templateUrl: '../static/partials/register.html',
        controller: 'userController'
      })
	 		.when('/dashboard', {
	 			templateUrl: './../static/partials/dashboard.html',
	 			controller: "dashboardController"
	 		})
      .when('/customers',{
          templateUrl: './../static/partials/customers.html',
          controller: "customerController"
      })
      .when('/orders',{
          templateUrl: './../static/partials/orders.html',
          controller: "ordersController"
      })
      .when('/products',{
          templateUrl: './../static/partials/products.html',
          controller: "userController"
          // controller: "productsController"
      })
      .when('/logout',{
          templateUrl: '../static/partials/login.html',
          controller: "userController"
      })
      .otherwise({
        redirectTo: '/'
      });
})
