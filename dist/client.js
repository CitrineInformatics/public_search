'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datasetSearch = exports.imagePresignedUrls = exports.pifSearch = undefined;

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiKey = '6ju1N2n4zLRqzZrNEo1xSQtt'; // prod

var headers = {
  'X-Api-Key': encodeURI(apiKey),
  'Content-Type': 'application/json',
  'X-Citrination-API-Version': '1.0.0'
};
var site = 'https://citrination.com';

function isValidResponse(response) {
  return response && response.statusCode === 200;
}

function pifSearch(query) {
  return new _promise2.default(function (resolve, reject) {
    _request2.default.post({
      headers: headers,
      url: site + '/api/search/pif_search',
      body: JSON.stringify(query)
    }, function (error, response, body) {
      if (isValidResponse(response)) {
        resolve({ body: body });
      } else {
        reject(new Error(error));
      }
    });
  });
}

function datasetSearch(query) {
  return new _promise2.default(function (resolve, reject) {
    _request2.default.post({
      headers: headers,
      url: site + '/api/search/dataset',
      body: JSON.stringify(query)
    }, function (error, response, body) {
      if (isValidResponse(response)) {
        resolve({ body: body });
      } else {
        reject(new Error(error));
      }
    });
  });
}

/**
 * Takes an array of imagePath objects and returns their presignedurls
 * @param  {string} imagePath.set       Dataset ID
 * @param  {string} imagePath.version   Dataset Version ID
 * @param  {string} imagePath.path      Path From Query
 * @return {Promise}            Promise containing presignedUrl values
 */
function imagePresignedUrls(imagePaths) {
  return _promise2.default.all(imagePaths.map(function (imagePath) {
    var url = site + '/api/datasets/' + imagePath.set + '/version/' + imagePath.version + '/url/' + imagePath.path;
    return new _promise2.default(function (resolve, reject) {
      _request2.default.get({ headers: headers, url: url }, function (error, response, body) {
        if (isValidResponse(response)) {
          resolve({ body: body });
        } else {
          reject(new Error('Oops'));
        }
      });
    });
  }));
}

exports.pifSearch = pifSearch;
exports.imagePresignedUrls = imagePresignedUrls;
exports.datasetSearch = datasetSearch;