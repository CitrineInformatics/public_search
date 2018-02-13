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

var Instrument = function (_PifComponent) {
  (0, _inherits3.default)(Instrument, _PifComponent);

  function Instrument(rawInstrument) {
    (0, _classCallCheck3.default)(this, Instrument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Instrument.__proto__ || Object.getPrototypeOf(Instrument)).call(this));

    _this.name = rawInstrument.name;
    _this.model = rawInstrument.model;
    _this.producer = rawInstrument.producer;
    _this.url = rawInstrument.url;
    _this.tags = rawInstrument.tags;
    return _this;
  }

  (0, _createClass3.default)(Instrument, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        model: this.model,
        producer: this.producer,
        url: this.url,
        tags: this.tags
      };
    }
  }]);
  return Instrument;
}(_abstract2.default);

exports.default = Instrument;