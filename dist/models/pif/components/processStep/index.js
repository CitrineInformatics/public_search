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

var _instrument = require('../instrument');

var _instrument2 = _interopRequireDefault(_instrument);

var _software = require('../software');

var _software2 = _interopRequireDefault(_software);

var _value = require('../value');

var _value2 = _interopRequireDefault(_value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProcessStep = function (_PifComponent) {
  (0, _inherits3.default)(ProcessStep, _PifComponent);

  function ProcessStep(rawProcessStep) {
    (0, _classCallCheck3.default)(this, ProcessStep);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProcessStep.__proto__ || Object.getPrototypeOf(ProcessStep)).call(this));

    if (rawProcessStep.name) {
      _this.name = rawProcessStep.name;
    }

    if (rawProcessStep.tags) {
      _this.tags = rawProcessStep.tags;
    }

    if (rawProcessStep.instruments && Array.isArray(rawProcessStep.instruments)) {
      _this.instruments = rawProcessStep.instruments.map(function (i) {
        return new _instrument2.default(i);
      });
    } else {
      _this.instruments = [];
    }

    if (rawProcessStep.software && Array.isArray(rawProcessStep.software)) {
      _this.software = rawProcessStep.software.map(function (s) {
        return new _software2.default(s);
      });
    } else {
      _this.software = [];
    }

    if (rawProcessStep.details && Array.isArray(rawProcessStep.details)) {
      _this.details = rawProcessStep.details.map(function (d) {
        return new _value2.default(d);
      });
    } else {
      _this.details = [];
    }
    return _this;
  }

  (0, _createClass3.default)(ProcessStep, [{
    key: 'toJSON',
    value: function toJSON() {
      var retJSON = {};

      if (this.name) {
        retJSON.name = this.name;
      }

      if (this.instruments.length > 0) {
        retJSON.instruments = this.instruments.map(function (i) {
          return i.toJSON();
        });
      }

      if (this.software.length > 0) {
        retJSON.software = this.software.map(function (s) {
          return s.toJSON();
        });
      }

      if (this.tags) {
        retJSON.tags = this.tags;
      }

      if (this.details.length > 0) {
        retJSON.details = this.details.map(function (d) {
          return d.toJSON();
        });
      }

      return retJSON;
    }
  }]);
  return ProcessStep;
}(_abstract2.default);

exports.default = ProcessStep;