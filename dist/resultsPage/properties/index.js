'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(inputArray) {
    var res, queryResponse, buckets, values;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _client.pifSearch)((0, _query2.default)(inputArray));

          case 3:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            buckets = queryResponse.results.analysis.property.buckets;
            values = buckets.map(function (bucket) {
              return bucket.value;
            });
            return _context.abrupt('return', values);

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);
            return _context.abrupt('return', []);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 10]]);
  }));

  return function main(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../../client');

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = main;