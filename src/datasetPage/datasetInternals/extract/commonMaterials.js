export default function (queryResponse) {
  try {
    const name = queryResponse.results.analysis.name;
    const chemicalFormula = queryResponse.results.analysis.chemicalFormula;
    if (name && name.buckets && name.buckets.length > 2) {
      return name.buckets.slice(3).map(b => b.value);
    }
    return chemicalFormula.buckets.slice(3).map(b => b.value);
  } catch (e) {
    console.log(e);
    return [];
  }
}
