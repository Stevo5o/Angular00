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
    var characterControllers = angular.module('characterControllers', []);

    characterControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
            $http.get('js/data.json').success(function (data) {
                $scope.characters = data;
                $scope.characterOrder = 'name';
            });
        }]);

    characterControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
            $http.get('js/data.json').success(function (data) {
                $scope.characters = data;
                $scope.whichItem = $routeParams.itemId;
            });
        }]);
}()); // end immediately invoked anonymous function