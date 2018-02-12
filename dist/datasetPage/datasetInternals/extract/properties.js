"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryResponse) {
  try {
    var buckets = queryResponse.results.analysis.property.buckets;
    return buckets.map(function (b) {
      var returnBlock = {
        name: b.value
      };

      if (b.analysis && b.analysis.units && b.analysis.units.buckets && b.analysis.units.buckets[0] && b.analysis.units.buckets[0].value) {
        returnBlock.units = b.analysis.units.buckets[0].value;
      }
      return returnBlock;
    });
  } catch (e) {
    console.log(e);
    return []; // no properties returned
  }
};