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

var chemicalFormula = 'chemicalFormula';

var ChemicalFormula = function (_Input) {
  (0, _inherits3.default)(ChemicalFormula, _Input);

  function ChemicalFormula(value) {
    (0, _classCallCheck3.default)(this, ChemicalFormula);
    return (0, _possibleConstructorReturn3.default)(this, (ChemicalFormula.__proto__ || Object.getPrototypeOf(ChemicalFormula)).call(this, chemicalFormula, value));
  }

  (0, _createClass3.default)(ChemicalFormula, [{
    key: 'toSystem',
    value: function toSystem() {
      return {
        logic: 'MUST',
        chemicalFormula: [{
          filter: {
            equal: this.value,
            exact: true
          }
        }]
      };
    }
  }]);
  return ChemicalFormula;
}(_abstract2.default);

ChemicalFormula.type = chemicalFormula;

exports.default = ChemicalFormula;