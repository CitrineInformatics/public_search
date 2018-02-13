'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(chemicalFormula) {
    var res, queryResponse;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return buildQuery(chemicalFormula);

          case 2:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            return _context.abrupt('return', processResponse(queryResponse));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function main(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../../client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// make against /datasets/search instead of /pifs/search
function buildQuery(chemicalFormula) {
  var query = {
    query: [{
      system: [{
        chemicalFormula: [{
          filter: [{
            equal: chemicalFormula
          }]
        }]
      }]
    }],
    size: 25,
    countPifs: true
  };
  return (0, _client.datasetSearch)(query);
}

function processResponse(queryResponse) {
  if (queryResponse.results.hits) {
    return queryResponse.results.hits.map(function (hit) {
      return {
        name: hit.name,
        recordCount: hit.numPifs,
        path: hit.id
      };
    });
  }
  return [];
}

exports.default = main;