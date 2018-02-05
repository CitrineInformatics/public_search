import { lookupTrie } from './index';

it('should return the approprite matches from trie', () => {
  const results = lookupTrie.get('SMI');
  expect(results[0].value).toEqual({
    type: 'categoricalProperty',
    value: 'SMILES',
    options: [],
  });
});

it('should return appropriate matches in multi-match case', () => {
  const results = lookupTrie.get('Lattice');
  expect(results).toHaveLength(42);
});
