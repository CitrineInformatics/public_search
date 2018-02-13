"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryResponse) {
  try {
    if (queryResponse.results && queryResponse.results.analysis && queryResponse.results.analysis.doi && queryResponse.results.analysis.doi.buckets) {
      return queryResponse.results.analysis.doi.buckets.map(function (b) {
        return b.value;
      });
    }
    return [];
  } catch (e) {
    console.log(e);
    return [];
  }
};