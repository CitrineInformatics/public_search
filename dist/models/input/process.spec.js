'use strict';

var _process = require('./process');

var _process2 = _interopRequireDefault(_process);

var _none = require('./none');

var _none2 = _interopRequireDefault(_none);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleQuery = [{
  type: 'none',
  value: ''
}];

it('should make a None type input', function () {
  expect((0, _process2.default)(simpleQuery[0])).toBeInstanceOf(_none2.default);
});