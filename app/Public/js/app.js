/**
 * Created by King on 28-12-2014.
 */
var mmApp = angular.module('mmApp', ['ngRoute']);

mmApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/1', {
                templateUrl: './partials/part1.html',
                //controller: 'ExpenseCtrl',
                //activetab: "addexpense"
            }).
            when('/2', {
                templateUrl: './partials/part2.html',
                //controller: 'IncomeCtrl',
                //activetab: "addincome"
            }).
            when('/3', {
                templateUrl: './partials/part3.html',
                //activetab: "summary"
                //controller: 'SummaryViewCtrl'
            }).
            otherwise({
                redirectTo: '/1'
            });
    }]
);