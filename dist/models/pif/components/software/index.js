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

var Software = function (_PifComponent) {
  (0, _inherits3.default)(Software, _PifComponent);

  function Software(rawSoftware) {
    (0, _classCallCheck3.default)(this, Software);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Software.__proto__ || Object.getPrototypeOf(Software)).call(this));

    if (rawSoftware.name) {
      _this.name = rawSoftware.name;
    }

    if (rawSoftware.version) {
      _this.version = rawSoftware.version;
    }

    if (rawSoftware.producer) {
      _this.producer = rawSoftware.producer;
    }

    if (rawSoftware.url) {
      _this.url = rawSoftware.url;
    }

    if (rawSoftware.tags) {
      _this.tags = rawSoftware.tags;
    }
    return _this;
  }

  (0, _createClass3.default)(Software, [{
    key: 'toJSON',
    value: function toJSON() {
      var retJSON = {};

      if (this.name) {
        retJSON.name = this.name;
      }

      if (this.version) {
        retJSON.version = this.version;
      }

      if (this.producer) {
        retJSON.producer = this.producer;
      }

      if (this.url) {
        retJSON.url = this.url;
      }

      if (this.tags) {
        retJSON.tags = this.tags;
      }

      return retJSON;
    }
  }]);
  return Software;
}(_abstract2.default);

exports.default = Software;