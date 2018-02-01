import getDatasetPageData from './datasetPage';
import getMaterialPageData from './materialPage';
import { firstPageResults, suggestedInput } from './resultsPage';
import * as input from 'models/input';

module.exports = {
  getDatasetPageData,
  getMaterialPageData,
  getResultsPageData: firstPageResults,
  suggestedResultsQueries: [suggestedInput],
  input: {
    CategoricalProperty: input.CategoricalProperty,
    ChemicalFormula: input.ChemicalFormula,
    None: input.None,
    NumericProperty: input.NumericProperty,
  },

};
