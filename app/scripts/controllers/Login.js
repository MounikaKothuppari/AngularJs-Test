'use strict';

/**
 * @ngdoc function
 * @name angularJsTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsTestApp
 */
angular.module('angularJsTestApp')
    .controller('LoginCtrl', function($scope, LoginService, $state, $rootScope) {
        $scope.data = {};
        $scope.fnlogin = function() {
          
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                  LoginService.setData($scope.data.username, $scope.data.password);
                window.alert(data);
                $state.go('DashBoard');
                $rootScope.showMenu = false;
            }).error(function(data) {
                window.alert(data);
            });
        };
           if($state.is('Login')){
        LoginService.removeInfo();
         $rootScope.showMenu = true;
            }

    });
