'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = require('../../../utility');

exports.default = function (queryResponse) {
  var prop = queryResponse.results.analysis.property;
  if (prop && prop.buckets) {
    var propertyBuckets = prop.buckets;
    var columns = propertyBuckets.map(function (bucket) {
      return { value: bucket.value, title: bucket.value };
    });
    var rows = [{}];
    propertyBuckets.forEach(function (bucket) {
      var unitBucket = bucket.analysis.units.buckets[0];
      if (unitBucket.value !== 'none') {
        rows[0][bucket.value] = (0, _utility.processPropertyValue)(unitBucket.analysis, unitBucket.value);
      }
    });
    return { columns: columns, rows: rows };
  }

  return { columns: [], rows: [] };
};