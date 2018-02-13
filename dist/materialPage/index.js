'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var showMaterialPage = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(formula) {
    var datasetStatistics, materialResults;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _datasetStatistics2.default)(formula);

          case 2:
            datasetStatistics = _context.sent;
            _context.next = 5;
            return (0, _materialStatistics2.default)(formula);

          case 5:
            materialResults = _context.sent;

            if (materialResults.hasNoErrors) {
              materialResults.data.datasetStatistics = datasetStatistics;
            }
            return _context.abrupt('return', materialResults);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function showMaterialPage(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _materialStatistics = require('./materialStatistics');

var _materialStatistics2 = _interopRequireDefault(_materialStatistics);

var _datasetStatistics = require('./datasetStatistics');

var _datasetStatistics2 = _interopRequireDefault(_datasetStatistics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = showMaterialPage;