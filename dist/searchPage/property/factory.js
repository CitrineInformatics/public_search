'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _numeric = require('./numeric');

var _numeric2 = _interopRequireDefault(_numeric);

var _categorical = require('./categorical');

var _categorical2 = _interopRequireDefault(_categorical);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Sample Property
  {
    propertyName: "Band Gap", //string
    min: 0, //optional, number
    max: 7, //optional, number
    units: "eV" //string
    value: "Steel" //optional, string
    exact: true // IF autocomplete
  }
*/

/**
 * Instantiate appropriate properties based on input
 * @param  {object} property See Class Implemnentations for detail
 * @return {object[]}          Array of Property Instances
 */
exports.default = function (property) {
  // Must be numeric
  if (property.min && property.max) {
    return new _numeric2.default(property.name, property.min, property.max, property.units);
  }

  return new _categorical2.default(property.name, property.value, property.fromAutoComplete);
};