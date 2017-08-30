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
    var vm = this,
        showSearch = false;

    this.orders = {
      pon: {
        snia: '',
        obiad: '',
        kola: ''
      },
      wt: {
        snia: '',
        obiad: '',
        kola: ''
      },
      sr: {
        snia: '',
        obiad: '',
        kola: ''
      },
      czw: {
        snia: '',
        obiad: '',
        kola: ''
      },
      pt: {
        snia: '',
        obiad: '',
        kola: ''
      }
    };
    this.dzien = '';
    this.jedzenie = '';
    this.pora = '';

    this.clicked = function(dzien, jedzenie){
      vm.dzien = dzien;
      vm.jedzenie = jedzenie;
    };

    this.clickedMeal = function(pora){
      vm.pora = pora;
      vm.addOrder(vm.orders, vm.dzien, vm.pora, vm.jedzenie);
    };

    this.addOrder = function(orders, dzien, pora, jedzenie){
      if(dzien === 'all'){
        var dni = ['pon', 'wt', 'sr', 'czw', 'pt'];
        for(var i=0; i <5; i++){
          orders[dni[i]][pora] = jedzenie;  
          console.log('pętla');
        }  
      } else {
        orders[dzien][pora] = jedzenie;
        console.log(orders);
      }
    };

    fetchData.then(function(data) {
      vm.items = data;
    });
    
  }]);
