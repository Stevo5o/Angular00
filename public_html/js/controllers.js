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

                if($routeParams.itemId > 0) {
                	$scope.prevItem = Number($routeParams.itemId)-1;
                } else {
                	$scope.prevItem = $scope.characters.length-1;
                } 

                if($routeParams.itemId < $scope.characters.length-1) {
                	$scope.nextItem = Number($routeParams.itemId)+1;
                } else {
                	$scope.nextItem = 0;
                }
            });
        }]);
}()); // end immediately invoked anonymous function