import buildQuery from './query';
import { pifSearch } from 'client';
import Result from 'models/result';
import processResults from './extract';

async function main(datasetId, properties) {
  try {
    const query = buildQuery(datasetId, properties);
    const res = await pifSearch(query);
    const queryResponse = JSON.parse(res.body);
    return new Result({
      status: 'success',
      message: 'Successfully made 2 queries to Citrination and structured response',
      data: processResults(queryResponse, properties),
    });
  } catch (e) {
    console.log(e);
    return new Result({
      status: 'error',
      message: 'Failed to make requests or process results',
      error: e,
    });
  }
}

export default main;
