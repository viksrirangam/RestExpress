mmApp.factory("RestEmployee", function($resource) {
  return {
  	list:$resource("/api/employees")
  	,post:$resource("/api/employees", {}, {'create': {method: 'POST'}})
  	,get:$resource("/api/employees/:id", {}, {'query': {method: 'GET', isArray: false}})
  	,put:$resource("/api/employees/:id", {}, {'update': {method: 'PUT'}})
  	,patch:$resource("/api/employees/:id", {}, {'update': {method: 'PATCH'}})
  	,delete:$resource("/api/employees/:id")
  }
});