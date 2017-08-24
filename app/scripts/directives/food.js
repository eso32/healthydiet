'use strict';

/**
 * @ngdoc directive
 * @name healthydiet2App.directive:food
 * @description
 * # food
 */
angular.module('healthydiet2App')
  // .directive('food', function ($log) {
  //   function linkFunction(scope, elem, attrs){
  //     elem.on('mouseover', function() {
  //       $log.log(elem.children());
  //     })
  //   }
  //   return {
  //     scope: {
  //       appName: '@applicationName'
  //     },
  //     template: '<div>Hey! Its me yours directvie! {{appName}} </div>',
  //     link: linkFunction
  //   };
  // })
  .directive('mySvg', function(){
    return {
      scope: {
        color: '=',
        kiwiClick: '&'
      },
      templateUrl: 'images/kiwi.svg'
    }
  })
  .directive('myFood', function($log){
    function linkFunction(scope, elem, attrs){
      elem.on('mouseenter', function() {
        elem.children().children()[0].className += ' animate';
      });

      elem.on('mouseleave', function() {
        elem.children().children()[0].classList.remove('animate');
      });
    };

    return {
      scope: {
        source: '@',
        foodName: '@'
      },
      templateUrl: 'scripts/directives/food.html',
      link: linkFunction
    }
  })
  ;
