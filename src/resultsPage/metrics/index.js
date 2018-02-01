import buildQuery from './query';
import extract from './extract';

import { pifSearch } from 'client';
import Result from 'models/result';

async function main(userQueries, properties) {
  let fs;
  try {
    fs = require('fs');
  } catch (e) {
    // fs not supported
  }

  try {
    const query = buildQuery(userQueries, properties);
    if (fs) {
      fs.writeFileSync('tmp/results.metrics.query.json', JSON.stringify(query));
    }
    const res = await pifSearch(query);
    const queryResponse = JSON.parse(res.body);
    if (fs) {
      fs.writeFileSync('tmp/results.metrics.response.json', JSON.stringify(queryResponse));
    }
    return new Result({
      status: 'success',
      message: 'Successfully retrieved metrics for SearchResults Page',
      data: extract(queryResponse),
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
