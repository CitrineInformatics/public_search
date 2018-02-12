'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pifSearchResponse = { body: '"{}"' };

function pifSearch() {
  return pifSearchResponse;
}

function datasetSearch() {}

function imagePresignedUrls() {}

/*
  eslint no-underscore-dangle: ["error", { "allow": ["__setPifSearchResponse"] }]
*/
function __setPifSearchResponse(results) {
  pifSearchResponse = { body: JSON.stringify(results) };
}

exports.pifSearch = pifSearch;
exports.datasetSearch = datasetSearch;
exports.imagePresignedUrls = imagePresignedUrls;
exports.__setPifSearchResponse = __setPifSearchResponse;