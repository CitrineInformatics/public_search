export default function (queryResponse) {
  try {
    return queryResponse.results.analysis.doi.buckets.map(b => b.value);
  } catch (e) {
    console.log(e);
    return [];
  }
}
