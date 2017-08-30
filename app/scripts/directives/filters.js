'use strict';

/**
 * @ngdoc directive
 * @name healthydiet2App.directive:filters
 * @description
 * # filters
 */
angular.module('healthydiet2App')
  .directive('filters', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
            scope.$watch(attrs.filters, function(newValue) {

              if (newValue) {
                  element.removeClass('animateOut');
                  element.addClass('animateIn');
//                return element.css('display', 'block');
              } else {
//                  return element.toggleClass('animateIn')
//                return element.css('display', 'none');
                element.addClass('animateOut');
                element.removeClass('animateIn');
              }
            });
          }
      };
  });
