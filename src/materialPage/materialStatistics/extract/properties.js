import { processPropertyValue } from 'utility';

export default (queryResponse) => {
  const prop = queryResponse.results.analysis.property;
  if (prop && prop.buckets) {
    const propertyBuckets = prop.buckets;
    const columns = propertyBuckets.map(bucket => ({ value: bucket.value, title: bucket.value }));
    const rows = [{}];
    propertyBuckets.forEach((bucket) => {
      const unitBucket = bucket.analysis.units.buckets[0];
      if (unitBucket.value !== 'none') {
        rows[0][bucket.value] =
          processPropertyValue(unitBucket.analysis, unitBucket.value);
      }
    });
    return { columns, rows };
  }

  return { columns: [], rows: [] };
};
