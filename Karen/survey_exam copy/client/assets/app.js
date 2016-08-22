var app = angular.module("myApp", ["ngRoute", "ngCookies"]);

app.config(function($routeProvider){ $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/home', {
        templateUrl: 'partials/listpolls.html',
        controller: 'surveyController'
    })
    .when('/add', {
        templateUrl: 'partials/addpoll.html',
        controller: 'addpollController'
    })
    .when('/vote/:id', {
        templateUrl: 'partials/votepoll.html',
        controller: 'voteController'
    })
    .otherwise({
        redirectTo: '/'
    });

})
