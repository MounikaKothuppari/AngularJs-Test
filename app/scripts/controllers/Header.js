'use strict';

/**
 * @ngdoc function
 * @name angularJsTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsTestApp
 */
angular.module('angularJsTestApp')
    .controller('HeaderCtrl', function($scope, LoginService, $state, $rootScope) {
        $rootScope.showMenu = true;
        $scope.fnc = function() {
            $scope.gdata = LoginService.getData();
        };
        $scope.fnLogout = function() {
            LoginService.removeInfo();
            $state.go('home');
            $rootScope.showMenu = true;
        }

    })
    .filter('helloFilter', function() {
        return function(input) {
            return ("welcome   " + input || '');
        }
    })
