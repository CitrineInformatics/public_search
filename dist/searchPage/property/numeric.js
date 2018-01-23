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

var NumericProperty = function (_property) {
  (0, _inherits3.default)(NumericProperty, _property);

  /**
   * @param {string} name - Property Name
   * @param  {number} min - Min value provided by user
   * @param  {number} max - Max value provided by user
   * @param  {[string]} units - Units for the given value
   */
  function NumericProperty(name, min, max, units) {
    (0, _classCallCheck3.default)(this, NumericProperty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumericProperty.__proto__ || Object.getPrototypeOf(NumericProperty)).call(this, name));

    _this.min = min;
    _this.max = max;
    _this.units = units;
    return _this;
  }

  (0, _createClass3.default)(NumericProperty, [{
    key: 'toJSON',
    value: function toJSON() {
      var query = {
        logic: 'MUST',
        properties: [{
          name: {
            filter: {
              equal: this.name,
              exact: true
            }
          },
          value: {
            filter: {
              min: this.min,
              max: this.max
            }
          }
        }]
      };
      if (this.units) {
        query.properties[0].units = {
          filter: {
            exact: true,
            equal: this.units
          }
        };
      }
      return query;
    }
  }]);
  return NumericProperty;
}(_abstract2.default);

exports.default = NumericProperty;