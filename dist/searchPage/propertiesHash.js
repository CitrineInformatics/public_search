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
    var res, queryResponse;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _client.pifSearch)(query);

          case 3:
            res = _context.sent;
            queryResponse = JSON.parse(res.body);
            return _context.abrupt('return', extract(queryResponse));

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log('Problem getting properties list');
            console.log(_context.t0);
            return _context.abrupt('return', _context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../client');

var _input = require('../models/input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = {
  query: [{
    dataset: [{
      id: [{
        filter: {
          logic: 'MUST_NOT',
          equal: 150146
        }
      }]
    }],
    system: [{
      properties: {
        name: {
          analysis: {
            type: 'categorical',
            path: 'name',
            size: 2000,
            traversalMode: 'breadth_first'
          }
        },
        value: {
          analysis: [{
            type: 'statistics',
            path: 'name.units.statistics'
          }]
        },
        units: [{
          analysis: {
            type: 'categorical',
            path: 'name.units',
            size: 1,
            missing: 'unitless'
          }
        }]
      }
    }]
  }],
  size: 0
};

function extract(queryResponse) {
  var prefill = {};
  queryResponse.results.analysis.name.buckets.forEach(function (nameBucket) {
    var unitBuckets = nameBucket.analysis.units.buckets;
    if (unitBuckets && unitBuckets[0] && unitBuckets[0].value !== 'unitless') {
      var stats = unitBuckets[0].analysis.statistics;
      prefill[nameBucket.value] = new _input.NumericProperty(nameBucket.value, // value
      stats.min, // min
      stats.max, // max
      unitBuckets[0].value).toJSON();
    } else if (unitBuckets && unitBuckets[0] && unitBuckets[0].value === 'unitless') {
      var options = [];
      prefill[nameBucket.value] = new _input.CategoricalProperty(nameBucket.value, options).toJSON();
    } else {
      console.log('Somehow unitbucket had falsy value or no buckets');
    }
  });
  return prefill;
}

exports.default = main;