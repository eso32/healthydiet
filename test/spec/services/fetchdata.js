'use strict';

describe('Service: fetchData', function () {

  // load the service's module
  beforeEach(module('healthydiet2App'));

  // instantiate service
  var fetchData;
  beforeEach(inject(function (_fetchData_) {
    fetchData = _fetchData_;
  }));

  it('should do something', function () {
    expect(!!fetchData).toBe(true);
  });

});
