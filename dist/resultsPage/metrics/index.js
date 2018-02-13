'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userQueries, properties) {
    var query, res, queryResponse;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            query = (0, _query2.default)(userQueries, properties);
            _context.next = 4;
            return (0, _client.pifSearch)(query);

          case 4:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            return _context.abrupt('return', new _result2.default({
              status: 'success',
              message: 'Successfully retrieved metrics for SearchResults Page',
              data: (0, _extract2.default)(queryResponse)
            }));

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', new _result2.default({
              status: 'error',
              message: 'Failed to retrieve metrics for SearcResults page',
              error: _context.t0
            }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function main(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../../client');

var _result = require('../../models/result');

var _result2 = _interopRequireDefault(_result);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _extract = require('./extract');

var _extract2 = _interopRequireDefault(_extract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = main;