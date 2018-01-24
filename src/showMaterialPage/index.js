import materialStatistics from './materialStatistics';
import datasetStatics from './datasetStatistics';

const fs = require('fs');
// const chemFormula = "La0.8Sr0.2Ga0.8Mg0.2O2.85";
const chemFormula = "Al"
async function showMaterialPage(formula) {
  const datasetStatistics = await datasetStatics(formula);
  const materialResults = await materialStatistics(formula);
  if (materialResults.hasNoErrors) {
    materialResults.data.datasetStatistics = datasetStatistics;
  }
  fs.writeFileSync('tmp/2out', materialResults.toJSON());
  return materialResults;
}

showMaterialPage(chemFormula);

export default showMaterialPage;
