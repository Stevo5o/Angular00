/**
 * controllers.js 
 * @ Stephen O'Connor, March 2015
 * 
 * Dependencies: 
 * Angular 
 * 
 */

// immediately invoked anonymous function
( function () {
	var myApp = angular.module('myApp', [])

myApp.controller('MyController',         function MyController($scope) {
            $scope.dev = {
                'name' : 'SteJ O\'Connor',
                'title' : 'Web UI Developer',
                'company' : 'stefcλke'
            }
        } );

}() ); // end immediately invoked anonymous function


