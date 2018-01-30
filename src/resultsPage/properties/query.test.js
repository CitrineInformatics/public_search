import query from './query';

const expectedQuery = {
  query: [
    {
      system: [
        {
          simple: 'a string',
        },
        {
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
        },
      ],
    },
  ],
  size: 0,
};

test('Properly interpolates a query', () => {
  expect(query([{ simple: 'a string' }])).toEqual(expectedQuery);
});
