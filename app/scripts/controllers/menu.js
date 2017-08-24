'use strict';

/**
 * @ngdoc function
 * @name healthydiet2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the healthydiet2App
 */
angular.module('healthydiet2App')
  .controller('MenuCtrl', ['fetchData', function (fetchData) {
    var vm = this;

    // this.items = [
    //   {
    //     source: 'chk-sal.jpeg',
    //     name: 'Sałatka z kurczaka'
    //   },
    //   {
    //     source: 'apple-pie.jpg',
    //     name: 'Szarlotka'
    //   },
    // ];
    this.color = 'blue';
    this.showCurtain = function(elem){
      console.log(elem);
    };
    fetchData.then(function(data) {
      vm.items = data;
    });
  }]);
