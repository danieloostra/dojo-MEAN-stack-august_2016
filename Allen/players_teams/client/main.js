var app = angular.module('app', ["ngRoute"]);

//define routes

app.config(function($routeProvider){
  $routeProvider
    .when('/players', {
      controller: "playersController",
      templateUrl: "/partials/players.html"
    })
    .when('/teams', {
      controller: "teamsController",
      templateUrl: "/partials/teams.html"
    })
    .when('/associations', {
      templateUrl: "/partials/associations.html"
    })
    .otherwise('/players',{
    })
});
//////// player factory /////////////////////////------------------------

app.factory('playersFactory', function(){
  var factory = {};
  var players = [
    {name: 'Joey'},
    {name: 'lawbro'},
    {name: 'karen'}
  ];

  factory.showPlayers = function(callback){
    callback(players)
  };

  factory.createPlayers = function(player){
    players.push(player)
    // console.log(players);
  };
  factory.removePlayers = function(id, callback){
    players.splice(id, 1)
    callback(players)
  };
  return factory;
});
//////// players controller /////////////////////////------------------------

app.controller('playersController', ['$scope', 'playersFactory', function($scope, playersFactory){
  $scope.player = {};
  $scope.players = {};

  function displayPlayers(players){
    $scope.players = players;
    $scope.player = {}
  };
  // console.log($scope.players);
  $scope.showPlayers = function(){
    playersFactory.showPlayers(displayPlayers)
  };

  $scope.createPlayers = function(){
    playersFactory.createPlayers($scope.player)
    $scope.showPlayers();
  };

  $scope.removePlayers = function(id){
    playersFactory.removePlayers(id, displayPlayers)
  };

}]);

//////// team factory /////////////////////////------------------------

app.factory('teamsFactory', function(){
  var factory = {};
  var teams = [
    {name: 'redskins'},
    {name: 'chargers'},
    {name: 'steelers'}
  ];

  factory.showTeams= function(callback){
    callback(teams)
  };

  factory.createTeams = function(team){
    teams.push(team)
  };
  factory.removeTeams = function(id, callback){
    teams.splice(id, 1)
    callback(teams)
  };
////////////////////////////////// putting associations in the team factory

  var associations = [];

  factory.showAssociations= function(callback){
    callback(associations)
  };

  factory.createAssociations = function(association){
    associations.push(association);
    console.log(associations);
  }

  factory.removeAssociations = function(id, callback){
    associations.splice(id, 1);
    callback(associations)
  }

  return factory;
});

//////// team controller //////////////////////------------------------

app.controller('teamsController', ['$scope', 'teamsFactory', function($scope, teamsFactory){
  $scope.team = {};
  $scope.teams = {};

  function displayTeams(teams){
    $scope.teams = teams;
    $scope.team = {}
  };
  // console.log($scope.players);
  $scope.showTeams = function(){
    teamsFactory.showTeams(displayTeams)
  };

  $scope.createTeams = function(){
    teamsFactory.createTeams($scope.team)
    $scope.showTeams();
  };

  $scope.removeTeams = function(id){
    teamsFactory.removeTeams(id, displayTeams)
  };

}]);

//////// assocaiation controller-//////////////////-----------------------

app.controller('associationsController', ["$scope", "teamsFactory", "playersFactory",  function($scope, teamsFactory, playersFactory){
////// this is to get the teams and players to show on html drop down select.
  $scope.teams = [];
  $scope.players = [];

  function displayTeams(teams){
    $scope.teams = teams;
  };
  $scope.showTeams = function(){
    teamsFactory.showTeams(displayTeams)
  };
  $scope.showTeams();

  function displayPlayers(players){
    $scope.players = players;
  };
  $scope.showPlayers = function(){
    playersFactory.showPlayers(displayPlayers)
  };
  $scope.showPlayers();

////////////////////////////////////////////associations ---- from here down its not working
  var associations = {};
  var association = {};

  function displayAssociations(player){
    $scope.associations = player;
    $scope.association = {}
  };

  $scope.showAssociations = function(){
    teamsFactory.showAssociations(displayAssociations)
  };

  $scope.createAssociations = function(){
    teamsFactory.createAssociations($scope.association, $scope.association) //// <-- fixed scope in html
    $scope.showAssociations();
  };

  $scope.removeAssociation = function(id){
    teamsFactory.removeAssociations(id, displayAssociations)
  };




  // $scope.association = {};
  // $scope.associations = {};
  //
  // function displayAssociations(teams){
  //   $scope.associations = teams;
  //   $scope.association = {}
  // };
  // // console.log($scope.players);
  // $scope.showAssociations = function(){
  //   teamsFactory.showTeams(displayTeams)
  // };
  //
  // $scope.createAssociations = function(){
  //   teamsFactory.createTeams($scope.team)
  //   $scope.showTeams();
  // };
  //
  // $scope.removeTeams = function(id){
  //   teamsFactory.removeTeams(id, displayTeams)
  // };
}]);
