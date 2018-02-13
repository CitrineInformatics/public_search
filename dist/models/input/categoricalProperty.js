'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _abstract = require('./abstract');

var _abstract2 = _interopRequireDefault(_abstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoricalProperty = 'categoricalProperty';

function filters(options) {
  return options.map(function (opt) {
    return {
      logic: 'SHOULD',
      equal: opt,
      exact: true
    };
  });
}

var CategoricalProperty = function (_Input) {
  (0, _inherits3.default)(CategoricalProperty, _Input);

  function CategoricalProperty(value, options) {
    (0, _classCallCheck3.default)(this, CategoricalProperty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CategoricalProperty.__proto__ || Object.getPrototypeOf(CategoricalProperty)).call(this, categoricalProperty, value));

    _this.options = options;
    return _this;
  }

  (0, _createClass3.default)(CategoricalProperty, [{
    key: 'toJSON',
    value: function toJSON() {
      return (0, _extends3.default)({}, (0, _get3.default)(CategoricalProperty.prototype.__proto__ || Object.getPrototypeOf(CategoricalProperty.prototype), 'toJSON', this).call(this), {
        options: this.options
      });
    }
  }, {
    key: 'toSystem',
    value: function toSystem() {
      return {
        logic: 'MUST',
        properties: [{
          name: {
            filter: {
              equal: this.value,
              exact: true
            }
          },
          value: {
            filter: filters(this.options)
          }
        }]
      };
    }
  }]);
  return CategoricalProperty;
}(_abstract2.default);

CategoricalProperty.type = categoricalProperty;

exports.default = CategoricalProperty;