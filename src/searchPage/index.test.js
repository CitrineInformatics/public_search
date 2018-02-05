import index from './index'

jest.mock('fs');

const mock = JSON.stringify({
  testType: {
    "type": "testType",
    "value": "testValue",
    "options": []
  },
  secondTestType: {
    "type": "secondTestType",
    "value": "secondTestValue",
    "options": []
  }
});

beforeEach(() => {
  /*
    eslint no-underscore-dangle: ["error", { "allow": ["__setMockFiles"] }]
  */
  require('fs').__setMockFiles(mock);
});

afterAll(() => {
  jest.unmock('fs');
})

test('returns an empty array for unknown search value', async () => {
  const result = await index('');
  expect(result).toBeDefined();
  expect(result.data).toEqual([]);
});

test('returns values for specified search', async () => {
  const result = await index('secondTestType');
  expect(result).toBeDefined();
  expect(result.data.length).toBe(1);
  expect(result.data[0].type).toEqual('secondTestType')
});
