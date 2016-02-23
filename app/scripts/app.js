'use strict';

/**
 * @ngdoc overview
 * @name angularJsTestApp
 * @description
 * # angularJsTestApp
 *
 * Main module of the application.
 */
angular
    .module('angularJsTestApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/Home.html',
                controller: 'HomeCtrl',
                controllerAs: 'Home'
            })

        .state('Login', {
                url: '/Login',
                templateUrl: 'views/Login.html',
                controller: 'LoginCtrl',
                controllerAs: 'Login'
            })
            .state('DashBoard', {
                url: '/DashBoard',
                templateUrl: 'views/DashBoard.html',
                controller: 'DashBoardCtrl',
                controllerAs: 'DashBoard'
            })
            .state('Profile', {
            parent: 'DashBoard',
            url: "/Profile",
            templateUrl: 'views/Profile.html'
           })
 .state('MyRequests', {
            parent: 'DashBoard',
            url: "/MyRequests",
            templateUrl: 'views/MyRequests.html'
           })
 .state('MyToDo', {
            parent: 'DashBoard',
            url: "/MyToDo",
            templateUrl: 'views/MyToDo.html'
           })
 .state('MyLifeEvents', {
            parent: 'DashBoard',
            url: "/MyLifeEvents",
            templateUrl: 'views/MyLifeEvents.html'
           })
 .state('MyRewards', {
            parent: 'DashBoard',
            url: "/MyRewards",
            templateUrl: 'views/MyRewards.html'
           })
 .state('Nominations', {
            parent: 'DashBoard',
            url: "/Nominations",
            templateUrl: 'views/Nominations.html'
           })

        $urlRouterProvider.otherwise('/home');
    });
  