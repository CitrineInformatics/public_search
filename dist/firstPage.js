"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Some helpful interface api stuff to help you out
*/

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

var Property = function Property(name) {
	_classCallCheck(this, Property);

	this.name = name;
};

Property.propertyFromLiterals = function (property) {
	// Must be numeric
	if (property.min && property.max) {
		return new NumericProperty(property.name, property.min, property.max, property.units);
	} else {
		return new CategoricalProperty(property.name, property.value, property.fromAutoComplete);
	}
};

var CategoricalProperty = function (_Property) {
	_inherits(CategoricalProperty, _Property);

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
		_classCallCheck(this, CategoricalProperty);

		var _this = _possibleConstructorReturn(this, (CategoricalProperty.__proto__ || Object.getPrototypeOf(CategoricalProperty)).call(this, name));

		_this.value = value;
		_this.fromAutoComplete = fromAutoComplete;
		return _this;
	}

	_createClass(CategoricalProperty, [{
		key: "toJSON",
		value: function toJSON() {
			var query = {
				"logic": "MUST",
				"properties": [{
					"name": {
						"filter": {
							"equal": this.name,
							"exact": true
						}
					},
					"value": {
						"filter": {
							"equal": this.value
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
}(Property);

var NumericProperty = function (_Property2) {
	_inherits(NumericProperty, _Property2);

	/**
  * @param {string} name - Property Name
  * @param  {number} min - Min value provided by user
  * @param  {number} max - Max value provided by user
  * @param  {[string]} units - Units for the given value
 	 */
	function NumericProperty(name, min, max, units) {
		_classCallCheck(this, NumericProperty);

		var _this2 = _possibleConstructorReturn(this, (NumericProperty.__proto__ || Object.getPrototypeOf(NumericProperty)).call(this, name));

		_this2.min = min;
		_this2.max = max;
		_this2.units = units;
		return _this2;
	}

	_createClass(NumericProperty, [{
		key: "toJSON",
		value: function toJSON() {
			var query = {
				"logic": "MUST",
				"properties": [{
					"name": {
						"filter": {
							"equal": this.name,
							"exact": true
						}
					},
					"value": {
						"filter": {
							"min": this.min,
							"max": this.max
						}
					}
				}]
			};
			if (this.units) {
				query.properties[0].units = {
					"filter": {
						"exact": true,
						"equal": this.units
					}
				};
			}
			return query;
		}
	}]);

	return NumericProperty;
}(Property);

function getInitialQuery(properties) {
	var query = {
		"query": [{}]
	};

	query.query[0].system = properties.map(function (property) {
		return Property.propertyFromLiterals(property).toJSON();
	});

	// Add Aggregations Query
	query.query[0].system.push({
		"properties": [{
			"name": [{
				"analysis": [{
					"type": "categorical",
					"path": "property",
					"size": 5
				}]
			}]
		}]
	});
	return query;
}

var res = getInitialQuery([{
	name: "Band Gap",
	min: 2,
	max: 7,
	units: "eV"
}, {
	name: "Substrate",
	value: "Aluminum",
	fromAutoComplete: true
}]);

exports.default = getInitialQuery;