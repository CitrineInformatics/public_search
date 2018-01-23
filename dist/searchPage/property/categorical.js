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

var CategoricalProperty = function (_property) {
  (0, _inherits3.default)(CategoricalProperty, _property);

  /**
   * @param  {string} value - The categorical or
   *   string value of the property
   * @param  {[boolean]} fromAutoComplete - Pass true
   *   if this value came from a auto-completed field.
   *   If the user just typed something in and didn't click
   *   an autofill, pass falsy or leave blank
   * @param {string} name - Property Name
   */
  function CategoricalProperty(name, value, fromAutoComplete) {
    (0, _classCallCheck3.default)(this, CategoricalProperty);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CategoricalProperty.__proto__ || Object.getPrototypeOf(CategoricalProperty)).call(this, name));

    _this.value = value;
    _this.fromAutoComplete = fromAutoComplete;
    return _this;
  }

  (0, _createClass3.default)(CategoricalProperty, [{
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
              equal: this.value
            }
          }
        }]
      };
      if (this.fromAutoComplete) {
        query.properties[0].value.filter.exact = true;
      }
      return query;
    }
  }]);
  return CategoricalProperty;
}(_abstract2.default);

exports.default = CategoricalProperty;