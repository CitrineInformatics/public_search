import { pifSearch } from 'client';
import Result from 'models/result';

import buildQuery from './query';
import extract from './extract';

async function main(userQueries, properties) {
  try {
    const query = buildQuery(userQueries, properties);
    const res = await pifSearch(query);
    const queryResponse = JSON.parse(res.body);
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
