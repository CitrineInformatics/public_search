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

var _abstract = require('./abstract');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var none = 'none';

var None = function (_Input) {
  (0, _inherits3.default)(None, _Input);

  function None(value) {
    (0, _classCallCheck3.default)(this, None);
    return (0, _possibleConstructorReturn3.default)(this, (None.__proto__ || Object.getPrototypeOf(None)).call(this, none, value));
  }

  (0, _createClass3.default)(None, [{
    key: 'toSystem',
    value: function toSystem() {
      return {
        logic: 'SHOULD',
        simple: this.value
      };
    }
  }]);
  return None;
}(_abstract2.default);

None.type = none;

exports.default = None;