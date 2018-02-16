import materialStatistics from './materialStatistics';
import datasetStatics from './datasetStatistics';

const propertyTableMap = require('./constants/propertyTableMap.json');

async function showMaterialPage(formula) {
  const datasetStatistics = await datasetStatics(formula);
  const materialResults = await materialStatistics(formula);
  if (materialResults.hasNoErrors) {
    materialResults.data.datasetStatistics = datasetStatistics;
  }
  return materialResults;
}

export { showMaterialPage, propertyTableMap };
