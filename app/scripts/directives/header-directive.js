  'use strict';
  angular.module('angularJsTestApp')
      .directive('headerDirective', function() {
          return {
              templateUrl: 'views/Header.html',
              controller: 'HeaderCtrl'
          };
      });
