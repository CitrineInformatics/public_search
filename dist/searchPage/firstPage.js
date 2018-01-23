'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var test = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var res;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return firstPageResults([{
              name: 'Band Gap',
              min: 2,
              max: 7,
              units: 'eV'
            }, {
              name: 'Substrate',
              value: 'Aluminum',
              fromAutoComplete: true
            }]);

          case 3:
            res = _context.sent;

            console.log("VALID RESPONSE");
            console.log(res);
            fs.writeFileSync("/tmp/a", res.body);

            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            console.log("ERROR FIRED");
            console.log(_context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../client');

var _factory = require('./property/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs");

function firstPageResults(properties) {
  var query = {
    query: [{}]
  };

  query.query[0].system = properties.map(function (property) {
    return (0, _factory2.default)(property).toJSON();
  });

  // Add Aggregations Query
  query.query[0].system.push({
    properties: [{
      logic: "MUST",
      name: [{
        analysis: [{
          type: 'categorical',
          path: 'property',
          size: 5
        }]
      }]
    }]
  });
  fs.writeFileSync("/tmp/query", JSON.stringify(query));
  return (0, _client.pifSearch)(query);
}

test();
exports.default = firstPageResults;