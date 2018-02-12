"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function () {
  function Input(type, value) {
    (0, _classCallCheck3.default)(this, Input);

    this.type = type;
    this.value = value;
  }

  (0, _createClass3.default)(Input, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        type: this.type,
        value: this.value
      };
    }
  }]);
  return Input;
}();

exports.default = Input;