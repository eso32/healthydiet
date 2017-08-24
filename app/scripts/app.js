'use strict';

/**
 * @ngdoc overview
 * @name healthydiet2App
 * @description
 * # healthydiet2App
 *
 * Main module of the application.
 */
angular
  .module('healthydiet2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
