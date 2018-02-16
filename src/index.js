import 'core-js/fn/array/find';
import getDatasetPageData from './datasetPage';
import { showMaterialPage, propertyTableMap } from './materialPage';
import { firstPageResults, suggestedInput } from './resultsPage';
import { lookupTrie, resetPrefillMap } from './searchPage';
import * as input from 'models/input';

module.exports = {
  getDatasetPageData,
  getMaterialPageData: showMaterialPage,
  getResultsPageData: firstPageResults,
  suggestedResultsQueries: [suggestedInput],
  input: {
    CategoricalProperty: input.CategoricalProperty,
    ChemicalFormula: input.ChemicalFormula,
    None: input.None,
    NumericProperty: input.NumericProperty,
  },
  searchPage: {
    lookupTrie,
    resetPrefillMap,
  },
  materialsPage: {
    propertyTableMap,
  },
};
