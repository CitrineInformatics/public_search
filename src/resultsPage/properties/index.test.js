import index from './index';

jest.mock('client');

const properties = ['A', 'B', 'C'];

beforeEach(() => {
  /*
    eslint no-underscore-dangle: ["error", { "allow": ["__setPifSearchResponse"] }]
  */
  require('client').__setPifSearchResponse({
    results: {
      analysis: {
        property: {
          buckets: [{
            value: 'A',
          }, {
            value: 'B',
          }, {
            value: 'C',
          }],
        },
      },
    },
  });
});

test('returns an array of properties', async () => {
  const inputArray = [{ simple: 'Band Gap' }];
  const result = await index(inputArray);
  expect(result).toEqual(properties);
});
