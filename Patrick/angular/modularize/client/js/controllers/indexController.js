app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {

	var usersIndex = function() {
		userFactory.index(function(factoryUsers) {
			$scope.users = factoryUsers;
		});
	};

	$scope.show = function(user_id) {
		$location.url('/edit/' + user_id);
		};
	usersIndex();
}]);
