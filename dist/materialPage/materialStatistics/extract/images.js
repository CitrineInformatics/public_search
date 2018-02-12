'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var extractImagePaths = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(queryResponse) {
    var filePaths, s3ImagePaths, imagePaths;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            filePaths = [];

            if (!queryResponse.results.hits) {
              _context.next = 13;
              break;
            }

            queryResponse.results.hits.forEach(function (hit) {
              if (hit.extracted && hit.extracted.image) {
                filePaths.push({
                  set: hit.dataset,
                  version: hit.datasetVersion,
                  path: hit.extracted.image
                });
              }
            });

            s3ImagePaths = [];

            if (!(filePaths.length > 0)) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return (0, _client.imagePresignedUrls)(filePaths);

          case 7:
            imagePaths = _context.sent;

            fs.writeFileSync('tmp/2.1.1intermediate', JSON.stringify(imagePaths));
            s3ImagePaths = imagePaths.map(function (b) {
              return JSON.parse(b.body).url;
            });

          case 10:
            return _context.abrupt('return', s3ImagePaths);

          case 13:
            return _context.abrupt('return', filePaths);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function extractImagePaths(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _client = require('../../../client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = extractImagePaths;