"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryResponse) {
  var hits = queryResponse.results.hits;
  if (hits && hits[0]) {
    return {
      name: hits[0].name,
      description: hits[0].description
    };
  }
  return {};
};