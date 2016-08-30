app.controller('dashboardController', ['$scope', 'customerFactory','$location', '$cookies', function($scope, customerFactory, $location, $cookies){

  $scope.user = {}

  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user')
  } else{
    $location.url('/')
  }

  $scope.logout = function(){
    $cookies.remove('user')
    console.log($cookies.getObject('user'));
    $location.url('/')
  }


}])
