import { pifSearch } from 'client';
import { NumericProperty, CategoricalProperty } from 'models/input';

const query = {
  query: [
    {
      dataset: [
        {
          id: [
            {
              filter: {
                logic: 'MUST_NOT',
                equal: 150146,
              },
            },
          ],
        },
      ],
      system: [
        {
          properties: {
            name: {
              analysis: {
                type: 'categorical',
                path: 'name',
                size: 10,
              },
            },
            value: {
              analysis: [
                {
                  type: 'statistics',
                  path: 'name.units.statistics',
                },
                {
                  type: 'categorical',
                  path: 'name.units.categories',
                },
              ],
            },
            units: {
              analysis: {
                type: 'categorical',
                path: 'name.units',
                size: 1,
                missing: 'unitless',
              },
            },
          },
        },
      ],
    },
  ],
  size: 0,
};

function extract(queryResponse) {
  const prefill = {};
  queryResponse.results.analysis.name.buckets.forEach((nameBucket) => {
    const unitBuckets = nameBucket.analysis.units.buckets;
    if (unitBuckets &&
        unitBuckets[0] &&
        unitBuckets[0].value !== 'unitless') {
      const stats = unitBuckets[0].analysis.statistics;
      prefill[nameBucket.value] = new NumericProperty(
        nameBucket.value, // value
        stats.min, // min
        stats.max, // max
        unitBuckets[0].value, // units
      ).toJSON();
    } else if (unitBuckets &&
               unitBuckets[0] &&
               unitBuckets[0].value === 'unitless') {
      const options = unitBuckets[0].analysis.categories.buckets.map(b => b.value);
      prefill[nameBucket.value] = new CategoricalProperty(
        nameBucket.value,
        options,
      ).toJSON();
    } else {
      console.log('Somehow unitbucket had falsy value or no buckets');
    }
  });
  return prefill;
}

async function main() {
  try {
    const res = await pifSearch(query);
    const queryResponse = JSON.parse(res.body);
    return extract(queryResponse);
  } catch (e) {
    console.log('Problem getting properties list');
    console.log(e);
    return e;
  }
}

export default main;
