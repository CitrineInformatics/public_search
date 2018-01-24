'use strict';

var firstPageResults = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var properties, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _mostCommonProperties2.default)(userInput);

          case 2:
            properties = _context.sent;
            _context.next = 5;
            return (0, _metricsQuery2.default)(userInput, properties);

          case 5:
            response = _context.sent;

            console.log(response);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function firstPageResults() {
    return _ref.apply(this, arguments);
  };
}();

var _mostCommonProperties = require('./mostCommonProperties');

var _mostCommonProperties2 = _interopRequireDefault(_mostCommonProperties);

var _metricsQuery = require('./metricsQuery');

var _metricsQuery2 = _interopRequireDefault(_metricsQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userInput = [{
  name: 'Band Gap',
  min: 2,
  max: 7,
  units: 'eV'
}];

firstPageResults();