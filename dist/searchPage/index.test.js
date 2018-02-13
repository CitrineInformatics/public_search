'use strict';

var _index = require('./index');

it('should return the approprite matches from trie', function () {
  var results = _index.lookupTrie.get('SMI');
  expect(results[0].value).toEqual({
    type: 'categoricalProperty',
    value: 'SMILES',
    options: []
  });
});

it('should return appropriate matches in multi-match case', function () {
  var results = _index.lookupTrie.get('Lattice');
  expect(results).toHaveLength(42);
});