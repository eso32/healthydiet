'use strict';

/**
 * @ngdoc function
 * @name healthydiet2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthydiet2App
 */
angular.module('healthydiet2App')
  .controller('MainCtrl', function () {
    document.getElementById('login-panel-id').className += " animate";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
