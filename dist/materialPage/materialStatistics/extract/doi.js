"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryResponse) {
  var doi = queryResponse.results.analysis.doi;
  if (doi && doi.buckets) {
    return doi.buckets.map(function (b) {
      return b.value;
    });
  }
  return [];
};