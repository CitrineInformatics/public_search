import { pifSearch } from 'client';
import buildQuery from './query';

async function main(inputArray) {
  try {
    const res = await pifSearch(buildQuery(inputArray));
    const queryResponse = JSON.parse(res.body);
    console.log(JSON.stringify(queryResponse))
    const buckets = queryResponse.results.analysis.property.buckets;
    const values = buckets.map(bucket => bucket.value);
    return values;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default main;
