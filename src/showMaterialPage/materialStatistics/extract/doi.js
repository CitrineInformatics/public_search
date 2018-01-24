export default (queryResponse) => {
  const doi = queryResponse.results.analysis.doi;
  if (doi && doi.buckets) {
    return doi.buckets.map(b => b.value);
  }
  return [];
};
