import getDatasetPageData from './datasetPage';
import getMaterialPageData from './materialPage';
import getResultsPageData from './resultsPage';
import * as input from 'models/input';

module.exports = {
  getDatasetPageData,
  getMaterialPageData,
  getResultsPageData,
  input: {
    CategoricalProperty: input.CategoricalProperty,
    ChemicalFormula: input.ChemicalFormula,
    None: input.None,
    NumericProperty: input.NumericProperty,
  },
};
