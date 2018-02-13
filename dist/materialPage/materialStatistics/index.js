'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(formula) {
    var res, queryResponse;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _client.pifSearch)((0, _query2.default)(formula));

          case 3:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            _context.t0 = _result2.default;
            _context.t1 = extract.properties(queryResponse);
            _context.t2 = extract.processDefinitions(queryResponse);
            _context.t3 = extract.composition(queryResponse);
            _context.t4 = extract.doi(queryResponse);
            _context.next = 12;
            return (0, _utility.extractImagePaths)(queryResponse);

          case 12:
            _context.t5 = _context.sent;
            _context.t6 = {
              properties: _context.t1,
              processDefinitions: _context.t2,
              composition: _context.t3,
              doiLookupStrings: _context.t4,
              s3ImageUrls: _context.t5
            };
            _context.t7 = {
              status: 'success',
              message: 'Successfully retrieved metrics for MaterialShow page',
              data: _context.t6
            };
            return _context.abrupt('return', new _context.t0(_context.t7));

          case 18:
            _context.prev = 18;
            _context.t8 = _context['catch'](0);
            return _context.abrupt('return', new _result2.default({
              status: 'error',
              message: 'Failed to retrieve metrics for MaterialShow page',
              error: _context.t8
            }));

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 18]]);
  }));

  return function main(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../../client');

var _result = require('../../models/result');

var _result2 = _interopRequireDefault(_result);

var _utility = require('../../utility');

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _extract = require('./extract');

var extract = _interopRequireWildcard(_extract);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = main;