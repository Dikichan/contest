contestApp.controller('homeController', ['$scope', '$http' , function($scope, $http) {	
	$scope.participants= [];

	$http.get('api/concursants.json').success(function(data) {
      $scope.participants = data.concursants;
    });

    $scope.choseWinner = function() {

    	var lengthParticipants = $scope.participants.length;
    	$scope.numberWinner = Math.floor(Math.random() * lengthParticipants);
    }

}]);