import index from './index'

// TODO: Add tests, consider mocking fs.
test('returns an empty array for unknown search value', async () => {
  const result = await index('');
  expect(result).toBeDefined();
  expect(result.data).toEqual([]);
})
