import { pifSearch } from 'client';
import { ChemicalFormula } from 'models/input';

const query = {
  query: [
    {
      dataset: [
        {
          id: [
            {
              filter: {
                logic: 'MUST_NOT',
                equal: 150146,
              },
            },
          ],
        },
      ],
      system: [
        {
          chemicalFormula: {
            analysis: {
              type: 'categorical',
              path: 'chemicalFormula',
              size: 10,
            },
          },
        },
      ],
    },
  ],
  size: 0,
};

function extract(queryResponse) {
  const prefill = {};
  queryResponse.results.analysis.chemicalFormula.buckets.forEach((chemBucket) => {
    prefill[chemBucket.value] = new ChemicalFormula(chemBucket.value).toJSON();
  });
  return prefill;
}

async function main() {
  try {
    const res = await pifSearch(query);
    const queryResponse = JSON.parse(res.body);
    return extract(queryResponse);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export default main;
