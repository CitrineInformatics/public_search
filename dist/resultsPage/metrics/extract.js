'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (response) {
  var columns = [{
    value: 'Material',
    title: 'Material'
  }];

  var rows = response.results.analysis.chemicalFormula.buckets.map(function (bucket) {
    var row = {};
    row.Material = bucket.value;
    bucket.analysis.property.buckets.forEach(function (propertyBucket) {
      var innerBucket = propertyBucket.analysis.units.buckets[0];
      row[propertyBucket.value] = (0, _utility.processPropertyValue)(innerBucket.analysis, innerBucket.value);
      if (!columns.find(function (c) {
        return c.value === propertyBucket.value;
      })) {
        columns.push({
          value: propertyBucket.value,
          title: propertyBucket.value
        });
      }
    });
    return row;
  });
  return { rows: rows, columns: columns };
};

var _utility = require('../../utility');