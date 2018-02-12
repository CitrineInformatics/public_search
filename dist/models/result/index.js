"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Result = function () {
  /**
   * Class Representation of a response from one of the public lib endpts
   * @param  {string} config.status  enum("success", "warning", "error")
   * @param  {string} config.message
   * @param  {object} config.data    Data Object (data struct depends on endpt)
   * @param  {ErrorClass} config.error   An Instance of some error class
   */
  function Result(config) {
    (0, _classCallCheck3.default)(this, Result);

    this.status = config.status;
    this.message = config.message;
    this.data = config.data;
    this.error = config.error;
  }

  (0, _createClass3.default)(Result, [{
    key: "toJSON",
    value: function toJSON() {
      return JSON.stringify(this.data);
    }
  }, {
    key: "hasNoErrors",
    get: function get() {
      return this.error === undefined;
    }
  }]);
  return Result;
}();

exports.default = Result;