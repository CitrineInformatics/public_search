'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _abstract = require('../abstract');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileReference = function (_PifComponent) {
  (0, _inherits3.default)(FileReference, _PifComponent);

  function FileReference(rawFileReference) {
    (0, _classCallCheck3.default)(this, FileReference);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FileReference.__proto__ || Object.getPrototypeOf(FileReference)).call(this));

    _this.relativePath = rawFileReference.relativePath;
    _this.mimeType = rawFileReference.mimeType;
    _this.sha256 = rawFileReference.sha256;
    _this.md5 = rawFileReference.md5;
    _this.tags = rawFileReference.tags;
    return _this;
  }

  (0, _createClass3.default)(FileReference, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        relativePath: this.relativePath,
        mimeType: this.mimeType,
        sha256: this.sha256,
        md5: this.md5,
        tags: this.tags
      };
    }
  }]);
  return FileReference;
}(_abstract2.default);

exports.default = FileReference;