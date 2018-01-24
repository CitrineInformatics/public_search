import { datasetSearch } from '../client';

// make against /datasets/search instead of /pifs/search
function buildQuery(chemicalFormula) {
  const query = {
    query: [
      {
        system: [
          {
            chemicalFormula: [
              {
                filter: [
                  {
                    equal: chemicalFormula,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    size: 25,
    countPifs: true,
  };
  return datasetSearch(query);
}

function processResponse(queryResponse) {
  if (queryResponse.results.hits) {
    return queryResponse.results.hits.map(hit => ({
      name: hit.name,
      recordCount: hit.numPifs,
      path: hit.id,
    }));
  }
  return [];
}

async function main(chemicalFormula) {
  const res = await buildQuery(chemicalFormula);
  const queryResponse = JSON.parse(res.body);
  return processResponse(queryResponse);
}

export default main;
