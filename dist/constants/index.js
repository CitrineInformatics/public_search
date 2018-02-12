'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var chemicalPrefill, propertiesPrefill, finalPrefill;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _chemicalFormulaHash2.default)();

          case 3:
            chemicalPrefill = _context.sent;
            _context.next = 6;
            return (0, _propertiesHash2.default)();

          case 6:
            propertiesPrefill = _context.sent;
            finalPrefill = Object.assign(propertiesPrefill, chemicalPrefill);

            fs.writeFileSync('tmp/constants', JSON.stringify(finalPrefill));
            return _context.abrupt('return', finalPrefill);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);
            throw _context.t0;

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 12]]);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _chemicalFormulaHash = require('./chemicalFormulaHash');

var _chemicalFormulaHash2 = _interopRequireDefault(_chemicalFormulaHash);

var _propertiesHash = require('./propertiesHash');

var _propertiesHash2 = _interopRequireDefault(_propertiesHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

exports.default = main;