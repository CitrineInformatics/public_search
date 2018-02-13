'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(datasetId, properties) {
    var query, res, queryResponse;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            query = (0, _query2.default)(datasetId, properties);
            _context.next = 4;
            return (0, _client.pifSearch)(query);

          case 4:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            _context.t0 = _result2.default;
            _context.t1 = _extends3.default;
            _context.t2 = {};
            _context.t3 = (0, _extract2.default)(queryResponse, properties);
            _context.next = 12;
            return (0, _utility.extractImagePaths)(queryResponse);

          case 12:
            _context.t4 = _context.sent;
            _context.t5 = {
              s3ImageUrls: _context.t4
            };
            _context.t6 = (0, _context.t1)(_context.t2, _context.t3, _context.t5);
            _context.t7 = {
              status: 'success',
              message: 'Successfully made 2 queries to Citrination and structured response',
              data: _context.t6
            };
            return _context.abrupt('return', new _context.t0(_context.t7));

          case 19:
            _context.prev = 19;
            _context.t8 = _context['catch'](0);

            console.log(_context.t8);
            return _context.abrupt('return', new _result2.default({
              status: 'error',
              message: 'Failed to make requests or process results',
              error: _context.t8
            }));

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 19]]);
  }));

  return function main(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _client = require('../../client');

var _result = require('../../models/result');

var _result2 = _interopRequireDefault(_result);

var _extract = require('./extract');

var _extract2 = _interopRequireDefault(_extract);

var _utility = require('../../utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = main;