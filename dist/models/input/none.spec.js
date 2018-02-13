'use strict';

var _none = require('./none');

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var none = new _none2.default('simple');
var expectedSystemBlock = {
  logic: 'SHOULD',
  simple: 'simple'
};

it('correctly builds a system block', function () {
  expect(none.toSystem()).toEqual(expectedSystemBlock);
});