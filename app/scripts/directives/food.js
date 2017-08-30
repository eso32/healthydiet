'use strict';

/**
 * @ngdoc directive
 * @name healthydiet2App.directive:food
 * @description
 * # food
 */

angular.module('healthydiet2App')
  .directive('myFood', function(){
    function linkFunction(scope, elem){
      var elemChild = elem.children().children();
      
      elem.on('mouseenter', function() {
        elemChild[0].className += ' animate';
      });

      elem.on('mouseleave', function() {
        for(var i=0; i<3; i++){
          elemChild[i].classList.remove('animate');  
          elemChild[i].classList.remove('animate-down');
        }
      });

      elem.on('click', function() {
        elemChild[0].className += ' animate-down';
        elemChild[1].className += ' animate';
      });

      angular.element(elem.children().children()[1]).on('click', function(){
        elemChild[1].className += ' animate-down';
        elemChild[2].className += ' animate';
      });

      angular.element(elem.children().children()[2]).on('click', function(){
        elemChild[2].className += ' animate-down';
      });
    }

    return {
      scope: {
        source: '@',
        foodName: '@',
        dayClick: '&',
        mealClick: '&'
      },
      templateUrl: 'views/food.html',
      link: linkFunction
    };
  });
