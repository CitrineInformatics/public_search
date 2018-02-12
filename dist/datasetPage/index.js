'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(datasetId) {
    var datasetInternalsResults, recordsResults, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _datasetInternals2.default)(datasetId);

          case 3:
            datasetInternalsResults = _context.sent;
            _context.next = 6;
            return (0, _records2.default)(datasetId, datasetInternalsResults.data.properties);

          case 6:
            recordsResults = _context.sent;
            data = {
              datasetDetails: datasetInternalsResults.data.datasetDetails,
              recordCount: recordsResults.data.recordCount,
              commonMaterials: datasetInternalsResults.data.commonMaterials.slice(3),
              mostCitedReferences: datasetInternalsResults.data.dois,
              records: {
                rows: recordsResults.data.rows,
                columns: recordsResults.data.columns
              },
              s3ImageUrls: recordsResults.data.s3ImageUrls
            };
            return _context.abrupt('return', new _result2.default({
              status: 'success',
              message: 'Made datasetInternals and records query and properly parsed results',
              data: data
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', new _result2.default({
              status: 'error',
              message: 'Something went wrong with data fetch for datasetPage',
              error: _context.t0
            }));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 11]]);
  }));

  return function main(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _datasetInternals = require('./datasetInternals');

var _datasetInternals2 = _interopRequireDefault(_datasetInternals);

var _records = require('./records');

var _records2 = _interopRequireDefault(_records);

var _result = require('../models/result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = main;