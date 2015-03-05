/**
 * controllers.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * Angular
 *
 */

// immediately invoked anonymous function
(function () {
    var myApp = angular.module('myApp', []);

    myApp.controller('MyController', ['$scope', '$http', function ($scope, $http) {
            $http.get('js/data.json').success(function (data) {
                $scope.characters = data;
                $scope.characterOrder = 'name';
            });
        }]);
}()); // end immediately invoked anonymous function