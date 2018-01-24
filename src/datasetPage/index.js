import datasetInternals from './datasetInternals';
import records from './records';
import Result from 'result';

const fs = require('fs');

const id = 151803;


async function main(datasetId) {
  try {
    const datasetInternalsResults = await datasetInternals(datasetId);
    const recordsResults = await records(datasetId, datasetInternalsResults.data.properties);
    fs.writeFileSync('tmp/3.1res', datasetInternalsResults.toJSON());
    fs.writeFileSync('tmp/3.2res', recordsResults.toJSON());
    return new Result({
      status: 'success',
      message: 'Made datasetInternals and records query and properly parsed results',
      data: {
        recordCount: recordsResults.data.recordCount,
        commonMaterials: datasetInternalsResults.data.commonMaterials.slice(3),
        mostCitedReferences: datasetInternalsResults.data.dois,
        records: {
          rows: recordsResults.data.rows,
          columns: recordsResults.data.columns,
        },
      },
    });
  } catch (e) {
    return new Result({
      status: 'error',
      message: 'Something went wrong with data fetch for datasetPage',
      error: e,
    });
  }
}

main(id).then(function (res) {
  console.log(res)
});

export default main;
