export default function (inputs) {
  const query = {
    query: [{
      system: inputs,
    }],
    size: 0,
  };

  // Add Aggregations Query
  query.query[0].system.push({
    logic: 'MUST',
    properties: [
      {
        name: [
          {
            analysis: [
              {
                type: 'categorical',
                path: 'property',
                size: 5,
              },
            ],
          },
        ],
      },
    ],
  });

  return query;
}
