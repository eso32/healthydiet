'use strict';

describe('Directive: food', function () {

  // load the directive's module
  beforeEach(module('healthydiet2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<food></food>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the food directive');
  }));
});
