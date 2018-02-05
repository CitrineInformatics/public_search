import getDatasetPageData from './datasetPage';
import getMaterialPageData from './materialPage';
import getSearchPageData from './searchPage';
import { firstPageResults, suggestedInput } from './resultsPage';
import * as input from 'models/input';

module.exports = {
  getDatasetPageData,
  getMaterialPageData,
  getSearchPageData,
  getResultsPageData: firstPageResults,
  suggestedResultsQueries: [suggestedInput],
  input: {
    CategoricalProperty: input.CategoricalProperty,
    ChemicalFormula: input.ChemicalFormula,
    None: input.None,
    NumericProperty: input.NumericProperty,
  },

};
