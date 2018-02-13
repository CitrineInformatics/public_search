'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (processDefinitions) {
  processDefinitions.map(function (pd) {
    return new _processStep2.default(pd);
  });
};

var _processStep = require('./components/processStep');

var _processStep2 = _interopRequireDefault(_processStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }