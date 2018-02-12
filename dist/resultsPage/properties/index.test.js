'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../client');

var properties = ['A', 'B', 'C'];

beforeEach(function () {
  /*
    eslint no-underscore-dangle: ["error", { "allow": ["__setPifSearchResponse"] }]
  */
  require('../../client').__setPifSearchResponse({
    results: {
      analysis: {
        property: {
          buckets: [{
            value: 'A'
          }, {
            value: 'B'
          }, {
            value: 'C'
          }]
        }
      }
    }
  });
});

test('returns an array of properties', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var inputArray, result;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          inputArray = [{ simple: 'Band Gap' }];
          _context.next = 3;
          return (0, _index2.default)(inputArray);

        case 3:
          result = _context.sent;

          expect(result).toEqual(properties);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));