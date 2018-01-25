import mostCommonProperties from './mostCommonProperties';
import metricsQuery from './metricsQuery';

async function firstPageResults(userInput) {
  let properties = await mostCommonProperties(userInput);
  let response = await metricsQuery(userInput, properties);
  return response;
}

export default firstPageResults;
