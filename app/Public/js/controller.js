mmApp.controller("EmployeesCtrl", function($scope, $routeParams, RestEmployee) {
  RestEmployee.list.query(function(data) {
    $scope.employees = data;
  });
  $scope.removeEmployee = function(emp){
  	RestEmployee.delete.delete({id:emp.id});
  };
});

mmApp.controller("EmployeeCtrl", function($scope, $routeParams, RestEmployee) {
  RestEmployee.get.query({id:$routeParams.id}, function(data) {
    $scope.employee = data;
  });
  $scope.saveEmployee = function(emp){
  	RestEmployee.put.update({id:$routeParams.id}, emp);
  };
});

mmApp.controller("NewEmployeeCtrl", function($scope, $routeParams, RestEmployee) {
	$scope.employee = {
		"name":""
		,"id":-1
	}
  $scope.saveEmployee = function(emp){
  	RestEmployee.post.create(emp);
  };
});