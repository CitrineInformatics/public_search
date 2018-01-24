import mostCommonProperties from './mostCommonProperties';
import metricsQuery from './metricsQuery';
const userInput = [{
  name: 'Band Gap',
  min: 2,
  max: 7,
  units: 'eV',
}];


async function firstPageResults () {
  let properties = await mostCommonProperties(userInput);
  let response = await metricsQuery(userInput, properties);
  console.log(response.toJSON())
}


firstPageResults()