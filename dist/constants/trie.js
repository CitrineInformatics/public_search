'use strict';

var _triePrefixTree = require('trie-prefix-tree');

var _triePrefixTree2 = _interopRequireDefault(_triePrefixTree);

var _prefill = require('./prefill.json');

var _prefill2 = _interopRequireDefault(_prefill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = [];

Object.keys(_prefill2.default).forEach(function (key) {
  var words = key.split(' ');
  words.forEach(function (w) {
    return keys.push(w);
  });
});

var LookupTrie = (0, _triePrefixTree2.default)(keys);