'use strict';

/**
 * @ngdoc service
 * @name healthydiet2App.fetchData
 * @description
 * # fetchData
 * Service in the healthydiet2App.
 */
angular.module('healthydiet2App')
  .factory('fetchData', function($http) {
    return $http({
    method: 'GET',
    url: 'items.json',
    headers: {
     'Content-Type': 'application/json'
    }
    }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log('Error occured '+response.status);
      });
  });
