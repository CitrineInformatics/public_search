'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPrefillMap = exports.lookupTrie = undefined;

var _trie = require('./trie');

var _trie2 = _interopRequireDefault(_trie);

var _initialize = require('./initialize');

var _initialize2 = _interopRequireDefault(_initialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This method will regenerate prefill.json
// You probably wont need to use this
// We will manually run it when we want to update the
// autocomplete fields.
var resetPrefillMap = _initialize2.default;

exports.lookupTrie = _trie2.default;
exports.resetPrefillMap = resetPrefillMap;