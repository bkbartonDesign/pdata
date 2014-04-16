var app = angular.module('myApp',[])
	.config(['$routeProvider'], function($routeProvider){
		$routeProvider.
			when('/',{
				controller:"index"
			})
	});

function index($scope, $http){
	$http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.posts = data.posts;
    });
}

app.controller('myController',['$scope', '$filter', function($scope,$filter){
	$scope.x = "test";

	$scope.collection = {
		total:0,
		dttm:[],
		last_updated:""
	}

	$scope.click = function(){
		//console.log("clicked");		
		var current = new Date();
		// $scope.collection = {
		// 	total:$scope.collection.total + 1,
		// 	dttm:$scope.collection.push(current),
		// 	last_updated:current
		// }
		$scope.collection.total = $scope.collection.total + 1;
		$scope.collection.dttm.push(current);
		$scope.collection.last_updated = current;
		console.log($scope.collection);
	}
}]);
