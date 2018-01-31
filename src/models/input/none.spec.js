import None from './none';

const none = new None('simple');
const expectedSystemBlock = {
  logic: 'SHOULD',
  simple: 'simple',
};

it('correctly builds a system block', () => {
  expect(none.toSystem()).toEqual(expectedSystemBlock);
});
