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

function plusMinus(useLatex) {
  return useLatex ? '$\\pm$' : '\u2213';
}

function isApproximate(value) {
  return value.approximate === undefined ? false : value.approximate;
}

function approximate(value) {
  return isApproximate(value) ? '~' : '';
}

function greaterOrEqual(useLatex) {
  return useLatex ? '$\\ge$' : '>=';
}

function greater(useLatex) {
  return useLatex ? '$\\gt$' : '>';
}

function lessOrEqual(useLatex) {
  return useLatex ? '$\\le$' : '>=';
}

function less(useLatex) {
  return useLatex ? '$\\lt$' : '<';
}

function _toString(scalar, shouldUseLatex) {
  var useLatex = typeof shouldUseLatex !== 'undefined' ? shouldUseLatex : true;

  // we define a heuristic to decide what field of the scalar to display
  if (scalar.value && scalar.value.length > 0 && scalar.uncertainty) {
    return approximate(scalar.value) + scalar.value + plusMinus(useLatex) + scalar.uncertainty;
  } else if (scalar.value && scalar.value.length > 0) {
    return approximate(scalar.value) + scalar.value;
  } else if (scalar.minimum && scalar.minimum.length > 0 && scalar.maximum && scalar.maximum.length > 0) {
    return approximate({}) + ' ' + scalar.minimum + ' to ' + scalar.maximum;
  } else if (scalar.minimum && scalar.minimum.length > 0 && scalar.inclusiveMinimum) {
    return greaterOrEqual(useLatex) + scalar.minimum;
  } else if (scalar.minimum && scalar.minimum.length > 0) {
    return greater(useLatex) + scalar.minimum;
  } else if (scalar.maximum && scalar.maximum.length > 0 && scalar.inclusiveMaximum) {
    return lessOrEqual(useLatex) + scalar.maximum;
  } else if (scalar.maximum && scalar.maximum.length > 0) {
    return less(useLatex) + scalar.maximum;
  }
  return '';
}

var Scalar = function (_PifComponent) {
  (0, _inherits3.default)(Scalar, _PifComponent);

  function Scalar(rawScalar, presenter) {
    (0, _classCallCheck3.default)(this, Scalar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Scalar.__proto__ || Object.getPrototypeOf(Scalar)).call(this, presenter));

    _this.value = rawScalar.value;
    _this.name = rawScalar.name;
    _this.minimum = rawScalar.minimum;
    _this.inclusiveMinimum = rawScalar.inclusiveMinimum === true;
    _this.maximum = rawScalar.maximum;
    _this.inclusiveMaximum = rawScalar.inclusiveMaximum === true;
    _this.uncertainty = rawScalar.uncertainty;
    _this.approximate = rawScalar.approximage === true;
    _this.tags = rawScalar.tags;
    return _this;
  }

  (0, _createClass3.default)(Scalar, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        minimum: this.minimum,
        inclusiveMinimum: this.inclusiveMinimum,
        maximum: this.maximum,
        inclusiveMaximum: this.inclusiveMaximum,
        uncertainty: this.uncertainty,
        approximate: this.approximate,
        tags: this.tags,
        value: this.value
      };
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this.presenter) {
        return this.present(this.presenter);
      }
      return '' + _toString(this);
    }
  }]);
  return Scalar;
}(_abstract2.default);

exports.default = Scalar;