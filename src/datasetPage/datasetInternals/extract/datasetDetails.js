export default function (queryResponse) {
  const hits = queryResponse.results.hits;
  if (hits && hits[0]) {
    return {
      name: hits[0].name,
      description: hits[0].description,
    };
  }
  return {};
}
