import materialStatistics from './materialStatistics';
import datasetStatics from './datasetStatistics';

async function showMaterialPage(formula) {
  const datasetStatistics = await datasetStatics(formula);
  const materialResults = await materialStatistics(formula);
  if (materialResults.hasNoErrors) {
    materialResults.data.datasetStatistics = datasetStatistics;
  }
  return materialResults;
}

export default showMaterialPage;
