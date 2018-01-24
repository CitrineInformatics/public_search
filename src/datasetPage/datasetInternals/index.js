import buildQuery from './query';
import * as extract from './extract';
import { datasetSearch } from 'client';
import Result from 'result';

const fs = require('fs');

async function main(datasetId) {
  try {
    const query = buildQuery(datasetId);
    const res = await datasetSearch(query);
    const queryResponse = JSON.parse(res.body);
    fs.writeFileSync('tmp/3.1res', JSON.stringify(queryResponse));

    return new Result({
      status: 'success',
      message: 'Successfully made 2 queries to Citrination and structured response',
      data: {
        datasetDetails: extract.datasetDetails(queryResponse),
        commonMaterials: extract.commonMaterials(queryResponse),
        dois: extract.dois(queryResponse),
        properties: extract.properties(queryResponse),
      },
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
