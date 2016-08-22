var app = angular.module("loginApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider){ $routeProvider
    .when('/', {
        templateUrl: "partials/main.html",
        controller: "registrationController"
    })
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })

    .when('/youin', {
        templateUrl: 'partials/in.html',
        controller: 'inController'
    })
    .otherwise({
        redirectTo: '/'
    });

})
