var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider

    .when('/', {
      templateUrl: '/partials/login.html',
      controller: 'userController'
    })
    .when('/wall', {
      templateUrl: '/partials/wall.html',
      controller: 'wallController'
    })
    .otherwise('/',{
    })
})
