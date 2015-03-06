/* global angular */

var myApp = angular.module('myApp', [
		'ngRoute',
		'characterControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);