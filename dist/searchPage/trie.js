'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trieSearch = require('trie-search');

var _trieSearch2 = _interopRequireDefault(_trieSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefill = require('./prefill.json');

var trie = new _trieSearch2.default([], {
  min: 1, // Minimum length of a key to
  // store and search. By default this is 1,
  // but you might improve performance by using 2 or 3
  ignoreCase: true,
  indexField: undefined, // Defaults to undefined.
  // If specified, determines which rows are unique when using get().
  splitOnRegEx: false // Default regular expression to split
  // all keys into tokens.
  // By default this is any whitespace.
  // Set to 'false' if you have whitespace in your keys!
});

trie.addFromObject(prefill);

exports.default = trie;