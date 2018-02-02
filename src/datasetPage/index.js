import datasetInternals from './datasetInternals';
import records from './records';
import Result from 'models/result';

async function main(datasetId) {
  try {
    const datasetInternalsResults = await datasetInternals(datasetId);
    const recordsResults = await records(datasetId, datasetInternalsResults.data.properties);
    const data = {
      datasetDetails: datasetInternalsResults.data.datasetDetails,
      recordCount: recordsResults.data.recordCount,
      commonMaterials: datasetInternalsResults.data.commonMaterials.slice(3),
      mostCitedReferences: datasetInternalsResults.data.dois,
      records: {
        rows: recordsResults.data.rows,
        columns: recordsResults.data.columns,
      },
      s3ImageUrls: recordsResults.data.s3ImageUrls,
    };
    return new Result({
      status: 'success',
      message: 'Made datasetInternals and records query and properly parsed results',
      data,
    });
  } catch (e) {
    return new Result({
      status: 'error',
      message: 'Something went wrong with data fetch for datasetPage',
      error: e,
    });
  }
}

export default main;
