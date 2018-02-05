import lookupTrie from './trie';
import initialize from './initialize';

// This method will regenerate prefill.json
// You probably wont need to use this
// We will manually run it when we want to update the
// autocomplete fields.
const resetPrefillMap = initialize;

export { lookupTrie, resetPrefillMap };
