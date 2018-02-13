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

var _scalar = require('../scalar');

var _scalar2 = _interopRequireDefault(_scalar);

var _fileReference = require('../fileReference');

var _fileReference2 = _interopRequireDefault(_fileReference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compressScalars(scalars, units) {
  if (units) {
    return scalars.map(function (s) {
      return s + ' ' + units;
    }).join(', ');
  }
  return '' + scalars.join(', ');
}

var Value = function (_PifComponent) {
  (0, _inherits3.default)(Value, _PifComponent);

  function Value(rawValue) {
    (0, _classCallCheck3.default)(this, Value);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this));

    if (rawValue.name) {
      _this.name = rawValue.name;
    }

    if (rawValue.units) {
      _this.units = rawValue.units;
    }

    if (rawValue.tags) {
      _this.tags = rawValue.tags;
    }

    if (rawValue.scalars && Array.isArray(rawValue.scalars)) {
      _this.scalars = rawValue.scalars.map(function (s) {
        return new _scalar2.default(s);
      });
    } else {
      _this.scalars = [];
    }

    if (rawValue.files && Array.isArray(rawValue.files)) {
      _this.files = rawValue.files.map(function (f) {
        return new _fileReference2.default(f);
      });
    } else {
      _this.files = [];
    }
    return _this;
  }

  (0, _createClass3.default)(Value, [{
    key: 'toJSON',
    value: function toJSON() {
      var retJSON = {};

      if (this.name) {
        retJSON.name = this.name;
      }

      if (this.tags) {
        retJSON.tags = this.tags;
      }

      if (this.scalars.length > 0) {
        retJSON.value = compressScalars(this.scalars.map(function (s) {
          return s.toString();
        }), this.units);
      }

      if (this.files.length > 0) {
        this.files.map(function (f) {
          return f.toJSON();
        });
      }

      return retJSON;
    }
  }]);
  return Value;
}(_abstract2.default);

exports.default = Value;