function processCompositionStatistic(stat) {
  if (stat.count > 0) {
    return stat.average;
  }
  return undefined;
}

function extractComposition(queryResponse) {
  const composition = queryResponse.results.analysis.element;
  if (composition && composition.buckets) {
    const columns = [{
      value: 'statistic',
      title: '',
    }];
    const rows = [{}, {}, {}, {}]; // Initialize Weight / Atomic Percents

    composition.buckets.forEach((elementBucket) => {
      columns.push({
        value: elementBucket.value,
        title: elementBucket.value,
      });
      Object.keys(elementBucket.analysis).forEach((statKey, index) => {
        const stat = elementBucket.analysis[statKey];
        rows[index].statistic = statKey;
        rows[index][elementBucket.value] =
          processCompositionStatistic(stat);
      });
    });

    return { columns, rows };
  }
  return { columns: [], rows: [] };
}

export default extractComposition;
