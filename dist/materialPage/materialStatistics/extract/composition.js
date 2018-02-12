'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function processCompositionStatistic(stat) {
  if (stat.count > 0) {
    return stat.average;
  }
  return undefined;
}

function extractComposition(queryResponse) {
  var composition = queryResponse.results.analysis.element;
  if (composition && composition.buckets) {
    var columns = [{
      value: 'statistic',
      title: ''
    }];
    var rows = [{}, {}, {}, {}]; // Initialize Weight / Atomic Percents

    composition.buckets.forEach(function (elementBucket) {
      columns.push({
        value: elementBucket.value,
        title: elementBucket.value
      });
      Object.keys(elementBucket.analysis).forEach(function (statKey, index) {
        var stat = elementBucket.analysis[statKey];
        rows[index].statistic = statKey;
        rows[index][elementBucket.value] = processCompositionStatistic(stat);
      });
    });

    return { columns: columns, rows: rows };
  }
  return { columns: [], rows: [] };
}

exports.default = extractComposition;