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
const fs = require('fs');
showMaterialPage("Al").then(function (res) {
  console.log("boop")
  fs.writeFileSync('tmp/materialPage', JSON.stringify(res));
});


export default showMaterialPage;
