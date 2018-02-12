'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (input) {
  if (input instanceof _abstract2.default) {
    return input;
  }

  if (input.type) {
    switch (input.type) {
      case _categoricalProperty2.default.type:
        return new _categoricalProperty2.default(input.value, input.options);
      case _chemicalFormula2.default.type:
        return new _chemicalFormula2.default(input.value);
      case _none2.default.type:
        return new _none2.default(input.value);
      case _numericProperty2.default.type:
        return new _numericProperty2.default(input.value, input.min, input.max);
      default:
        throw new Error('Invalid Type Provided to Input Processor');
    }
  } else {
    return new Error('No type provided');
  }
};

var _abstract = require('./abstract');

var _abstract2 = _interopRequireDefault(_abstract);

var _categoricalProperty = require('./categoricalProperty');

var _categoricalProperty2 = _interopRequireDefault(_categoricalProperty);

var _chemicalFormula = require('./chemicalFormula');

var _chemicalFormula2 = _interopRequireDefault(_chemicalFormula);

var _none = require('./none');

var _none2 = _interopRequireDefault(_none);

var _numericProperty = require('./numericProperty');

var _numericProperty2 = _interopRequireDefault(_numericProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }