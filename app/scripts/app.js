'use strict';

/**
 * @ngdoc overview
 * @name simpleNgApp
 * @description
 * # simpleNgApp
 *
 * Main module of the application.
 */
angular
  .module('simpleNgApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
