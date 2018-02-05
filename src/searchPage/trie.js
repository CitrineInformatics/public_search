import Trie from 'trie-search';
import prefill from './prefill.json';

const trie = new Trie([], {
  min: 2, // Minimum length of a key to
  // store and search. By default this is 1,
  // but you might improve performance by using 2 or 3
  ignoreCase: true,
  indexField: undefined, // Defaults to undefined.
  // If specified, determines which rows are unique when using get().
  splitOnRegEx: false, // Default regular expression to split
  // all keys into tokens.
  // By default this is any whitespace.
  // Set to 'false' if you have whitespace in your keys!
});

trie.addFromObject(prefill);

export default trie;
