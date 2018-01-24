import { pifSearch } from '../client';
import propertyFromLiterals from './property/factory';
import Promise from 'promise';

function mostCommonProperties(properties) {
  const query = {
    query: [{}],
    size: 0,
  };

  query.query[0].system = properties.map(property => (
    propertyFromLiterals(property).toJSON()));

  // Add Aggregations Query
  query.query[0].system.push({
    logic: 'MUST',
    properties: [
      {
        name: [
          {
            analysis: [
              {
                type: 'categorical',
                path: 'property',
                size: 5,
              },
            ],
          },
        ],
      },
    ],
  });
  return pifSearch(query);
}

async function main(properties) {
  try {
    const res = await mostCommonProperties(properties);
    const queryResponse = JSON.parse(res.body);
    const values = queryResponse.results.analysis.property.buckets.map(bucket => bucket.value);
    return values;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default main;
