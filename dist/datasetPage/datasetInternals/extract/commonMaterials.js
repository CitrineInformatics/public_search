"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryResponse) {
  try {
    var name = queryResponse.results.analysis.name;
    var chemicalFormula = queryResponse.results.analysis.chemicalFormula;
    if (name && name.buckets && name.buckets.length > 2) {
      return name.buckets.slice(3).map(function (b) {
        return b.value;
      });
    }
    return chemicalFormula.buckets.slice(3).map(function (b) {
      return b.value;
    });
  } catch (e) {
    console.log(e);
    return [];
  }
};