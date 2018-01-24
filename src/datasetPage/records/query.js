function buildProperty(propertyName, propertyUnits) {
  const name = [{
    filter: [{ equal: propertyName, exact: true }],
  }];

  const value = [{ extractAs: propertyName }];

  const units = [{
    filter: [{ equal: propertyUnits || '' }], // Leace empty if no units
    extractAs: `${propertyName} units`,
  }];

  return {
    logic: 'OPTIONAL',
    value,
    name,
    units,
  };
}


function buildQuery(datasetId, properties) {
  const query = {
    query: [
      {
        dataset: [
          {
            id: [
              {
                filter: [
                  {
                    equal: datasetId,
                    exact: true,
                  },
                ],
              },
            ],
          },
        ],
        system: [
          {
            chemicalFormula: [
              {
                extractAs: 'Chemical Formula',
              },
            ],
            names: [
              {
                extractAs: 'Name',
              },
            ],
            properties: [],
          },
        ],
      },
    ],
    size: 25,
    addLatex: true,
    returnSystem: false,
    returnExtractedPath: false,
  };

  properties.forEach((property) => {
    query.query[0].system[0].properties.push(buildProperty(property.name, property.units));
  });

  return query;
}

export default buildQuery;
