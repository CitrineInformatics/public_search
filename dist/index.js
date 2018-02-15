'use strict';

require('core-js/fn/array/find');

var _datasetPage = require('./datasetPage');

var _datasetPage2 = _interopRequireDefault(_datasetPage);

var _materialPage = require('./materialPage');

var _materialPage2 = _interopRequireDefault(_materialPage);

var _resultsPage = require('./resultsPage');

var _searchPage = require('./searchPage');

var _input = require('./models/input');

var input = _interopRequireWildcard(_input);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  getDatasetPageData: _datasetPage2.default,
  getMaterialPageData: _materialPage2.default,
  getResultsPageData: _resultsPage.firstPageResults,
  suggestedResultsQueries: [_resultsPage.suggestedInput],
  input: {
    CategoricalProperty: input.CategoricalProperty,
    ChemicalFormula: input.ChemicalFormula,
    None: input.None,
    NumericProperty: input.NumericProperty
  },
  searchPage: {
    lookupTrie: _searchPage.lookupTrie,
    resetPrefillMap: _searchPage.resetPrefillMap
  }
};