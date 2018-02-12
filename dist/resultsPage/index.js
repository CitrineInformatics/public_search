'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestedInput = exports.firstPageResults = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var firstPageResults = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userInput) {
    var inputs, properties, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputs = userInput.map(function (u) {
              return (0, _input.process)(u).toSystem();
            });
            _context.prev = 1;
            _context.next = 4;
            return (0, _properties2.default)(inputs);

          case 4:
            properties = _context.sent;
            _context.next = 7;
            return (0, _metrics2.default)(inputs, properties);

          case 7:
            response = _context.sent;
            return _context.abrupt('return', response);

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](1);

            console.log(_context.t0);
            return _context.abrupt('return', new _result2.default({
              error: _context.t0,
              message: 'Failed Results Page Query',
              status: 'fail'
            }));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 11]]);
  }));

  return function firstPageResults(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * For now, use this input block for the suggested
 * links at the bottom of the page
 * (as indicated in the mockups)
 * Once we have the first iteration we
 * will write out more verbose queries for * you
 * that we'll put in in place of this query
 * To use, simply pass this value into firstPageResults
 * @type {Object}
 */


var _properties = require('./properties');

var _properties2 = _interopRequireDefault(_properties);

var _metrics = require('./metrics');

var _metrics2 = _interopRequireDefault(_metrics);

var _result = require('../models/result');

var _result2 = _interopRequireDefault(_result);

var _input = require('../models/input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suggestedInput = [{
  type: 'none',
  value: ''
}];

exports.firstPageResults = firstPageResults;
exports.suggestedInput = suggestedInput;