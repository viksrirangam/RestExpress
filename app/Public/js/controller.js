mmApp.controller("EmployeesCtrl", function($scope, $routeParams, $location, RestEmployee) {
  RestEmployee.list.query(function(data) {
    $scope.employees = data;
  }, function(err){
	$routeParams.msg=err.statusText;
  	$location.path('/err');
});
  	
  $scope.removeEmployee = function(emp){
  	RestEmployee.delete.delete({id:emp.id}, function(data){
  		$location.path('/#/1');  
  	}, function(err){
	$routeParams.msg=err.statusText;
  	$location.path('/err');
});
  };
});

mmApp.controller("EmployeeCtrl", function($scope, $routeParams, $location, RestEmployee) {
  RestEmployee.get.query({id:$routeParams.id}, function(data) {
    $scope.employee = data;
  }, function(err){
	$routeParams.msg=err.statusText;
  	$location.path('/err');
});

  $scope.saveEmployee = function(emp){
  	RestEmployee.put.update({id:$routeParams.id}, emp, function(data){
  		$location.path('/#/1');  
  	}, function(err){
	$routeParams.msg=err.statusText;
  	$location.path('/err');
});
  };
});

mmApp.controller("NewEmployeeCtrl", function($scope, $routeParams, $location, RestEmployee) {
	$scope.employee = {
		"name":""
		,"id":-1
	};
	
  $scope.saveEmployee = function(emp){
  	RestEmployee.post.create(emp, function(data){
  		$location.path('/#/1');  
  	}, function(err){
	$routeParams.msg=err.statusText;
  	$location.path('/err');
});
  };
});

mmApp.controller("ErrorCtrl", function($scope, $routeParams){
	$scope.message = $routeParams.msg;
});