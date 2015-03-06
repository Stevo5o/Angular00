/**
 * controllers.js
 * @ Stephen O'Connor, March 2015
 *
 * Dependencies:
 * Angular
 *
 */

// immediately invoked anonymous function

    var characterControllers = angular.module('characterControllers', []);

    characterControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
            $http.get('js/data.json').success(function (data) {
                $scope.characters = data;
                $scope.characterOrder = 'name';
            });
        }]);
