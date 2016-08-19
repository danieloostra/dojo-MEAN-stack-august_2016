var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){ $routeProvider
    .when("/friends", {
        templateUrl: "partials/friends.html",
        controller: 'friendsController'
    })
    .when("/friends/new", {
        templateUrl: "partials/new.html",
        controller: 'newController'
    })
    .when("/friends/edit/:id", {
        templateUrl: "partials/edit.html",
        controller: 'editController'
    })
    .when("/friends/:id", {
        templateUrl: "partials/show.html",
        controller: 'showController'
    })
    .otherwise({
        redirectTo: "/friends"
    });
})

//add controller to appropriate templateUrl
