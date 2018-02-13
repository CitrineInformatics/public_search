'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _publicSearchProcessStep = require('../../../models/pif/presenters/publicSearchProcessStep');

var _publicSearchProcessStep2 = _interopRequireDefault(_publicSearchProcessStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (queryResponse) {
  var preparations = [];
  if (queryResponse.results.hits) {
    queryResponse.results.hits.forEach(function (hit) {
      if (hit.extracted && hit.extracted.preparation) {
        preparations.push(hit.extracted.preparation);
      }
    });
  }

  return preparations.map(function (p) {
    return (0, _publicSearchProcessStep2.default)(p);
  });
};