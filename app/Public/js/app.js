/**
 * Created by King on 28-12-2014.
 */
var mmApp = angular.module('mmApp', ['ngRoute', 'ngResource']);

mmApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/1', {
                templateUrl: './partials/list.html',
                controller: 'EmployeesCtrl'
            }).
            when('/2', {
                templateUrl: './partials/create.html',
                controller: 'NewEmployeeCtrl'
            }).
            when('/3/:id', {
                templateUrl: './partials/edit.html',
                controller: 'EmployeeCtrl'
            }).
            otherwise({
                redirectTo: '/1'
            });
    }]
);