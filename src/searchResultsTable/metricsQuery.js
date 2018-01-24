import { pifSearch } from '../client';
import Result from 'result';
import { processPropertyValue } from 'utility';

const fs = require('fs');

function mainQuery(properties) {
  const propertyNames = properties.map(property => ({ equal: property, exact: true }));
  const system = {
    chemicalFormula: [
      {
        analysis: [
          {
            type: 'categorical',
            path: 'chemicalFormula',
            size: 25,
          },
        ],
      },
    ],
    properties: [
      {
        name: [
          {
            filter: propertyNames,
            analysis: [
              {
                type: 'categorical',
                path: 'chemicalFormula.property',
              },
            ],
          },
        ],
        value: [
          {
            analysis: [
              {
                type: 'statistics',
                path: 'chemicalFormula.property.units.numeric',
              },
              {
                type: 'categorical',
                path: 'chemicalFormula.property.units.categorical',
                size: 1,
              },
            ],
          },
        ],
        units: [
          {
            analysis: [
              {
                type: 'categorical',
                path: 'chemicalFormula.property.units',
                size: 1,
                missing: 'unitless',
              },
            ],
          },
        ],
      },
    ],
  };

  return system;
}

function buildQuery(userQueries, properties) {
  const query = {
    query: [{}],
  };
  query.query[0].system = userQueries;
  query.query[0].system.push(mainQuery(properties));
  query.size = 0;
  fs.writeFileSync('tmp/1.2req', JSON.stringify(query));
  return pifSearch(query);
}

function processResults(response) {
  const columns = [
    {
      value: 'Material',
      title: 'Material',
    },
  ];


  const data = response.results.analysis.chemicalFormula.buckets.map((bucket) => {
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
  return { data, columns };
}

async function main(userQueries, properties) {
  try {
    const res = await buildQuery(userQueries, properties);
    const queryResponse = JSON.parse(res.body);
    fs.writeFileSync('tmp/1.2res', JSON.stringify(queryResponse));
    return new Result({
      status: 'success',
      message: 'Successfully retrieved metrics for SearchResults Page',
      data: processResults(queryResponse),
    });
  } catch (e) {
    return new Result({
      status: 'error',
      message: 'Failed to retrieve metrics for SearcResults page',
      error: e,
    });
  }
}

export default main;
