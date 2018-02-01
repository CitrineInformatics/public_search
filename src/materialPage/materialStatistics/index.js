import { pifSearch } from 'client';
import Result from 'models/result';
import buildQuery from './query';

import * as extract from './extract';

async function main(formula) {
  let fs;
  try {
    fs = require('fs');
  } catch (e) {
    // fs not supported
  }

  try {
    const res = await pifSearch(buildQuery(formula));
    const queryResponse = JSON.parse(res.body);
    if (fs) {
      fs.writeFileSync('tmp/materials.material.response.json', JSON.stringify(queryResponse));
    }
    return new Result({
      status: 'success',
      message: 'Successfully retrieved metrics for MaterialShow page',
      data: {
        properties: extract.properties(queryResponse),
        processDefinitions: extract.processDefinitions(queryResponse),
        composition: extract.composition(queryResponse),
        doiLookupStrings: extract.doi(queryResponse),
        s3ImageUrls: await extract.images(queryResponse),
      },
    });
  } catch (e) {
    return new Result({
      status: 'error',
      message: 'Failed to retrieve metrics for MaterialShow page',
      error: e,
    });
  }
}

export default main;
