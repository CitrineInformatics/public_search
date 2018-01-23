'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pifSearch = undefined;

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiKey = '6ju1N2n4zLRqzZrNEo1xSQtt';
var headers = {
  'x-api-key': encodeURI(apiKey),
  'Content-Type': 'application/json',
  'X-Citrination-API-Version': '1.0.0'
};
var site = 'https://citrination.com';
// const datasetSearch = `${site}/search/dataset`;


function pifSearch(query) {
  return new _promise2.default(function (resolve, reject) {
    _request2.default.post({
      headers: headers,
      url: site + '/api/search/pif_search',
      form: query
    }, function (error, response, body) {
      if (response.statusCode === 200) {
        resolve({ body: body });
      } else {
        reject(new Error('Oops'));
      }
    });
  });
}

exports.pifSearch = pifSearch;