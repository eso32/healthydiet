'use strict';

/**
 * @ngdoc directive
 * @name healthydiet2App.directive:food
 * @description
 * # food
 */
angular.module('healthydiet2App')
  .directive('myFood', function($log){
    function linkFunction(scope, elem, attrs){
      elem.on('mouseenter', function() {
        elem.children().children()[0].className += ' animate';
      });

      elem.on('mouseleave', function() {
        elem.children().children()[0].classList.remove('animate');
        elem.children().children()[1].classList.remove('animate');
        elem.children().children()[2].classList.remove('animate');
        elem.children().children()[0].classList.remove('animate-down');
        elem.children().children()[1].classList.remove('animate-down');
        elem.children().children()[2].classList.remove('animate-down');
      });

      elem.on('click', function() {
        elem.children().children()[0].className += ' animate-down';
        elem.children().children()[1].className += ' animate';
        // $log.log($('.cell-food'));
      });

      angular.element(elem.children().children()[1]).on('click', function(){
        elem.children().children()[1].className += ' animate-down';
        elem.children().children()[2].className += ' animate';
      })

      angular.element(elem.children().children()[2]).on('click', function(){
        elem.children().children()[2].className += ' animate-down';
      })

    };

    return {
      scope: {
        source: '@',
        foodName: '@',
        dayClick: '&',
        mealClick: '&'
      },
      templateUrl: 'scripts/directives/food.html',
      link: linkFunction
    }
  })
  ;
