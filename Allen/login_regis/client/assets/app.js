var app = angular.module('app', ["ngRoute"]);
console.log('why does changing var app to myApp create error?');

console.log('inside app.js');

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'loginController',
      templateUrl: '/partials/login.html'
    })
    .when('/page',{
      controller: 'loginController',
      templateUrl: '/partials/page.html'
    })
    .otherwise('/',{
    })
});
