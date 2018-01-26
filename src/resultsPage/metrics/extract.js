import { processPropertyValue } from 'utility';

export default function (response) {
  const columns = [
    {
      value: 'Material',
      title: 'Material',
    },
  ];

  const rows = response.results.analysis.chemicalFormula.buckets.map((bucket) => {
    const row = {};
    row.Material = bucket.value;
    bucket.analysis.property.buckets.forEach((propertyBucket) => {
      const innerBucket = propertyBucket.analysis.units.buckets[0];
      row[propertyBucket.value] = processPropertyValue(
        innerBucket.analysis,
        innerBucket.value,
      );
      if (!columns.find(c => c.value === propertyBucket.value)) {
        columns.push({
          value: propertyBucket.value,
          title: propertyBucket.value,
        });
      }
    });
    return row;
  });
  return { rows, columns };
}
