import retrieveProperties from './properties';
import retrieveMetrics from './metrics';
import Result from 'models/result';
import { process as processInput } from 'models/input';

async function firstPageResults(userInput) {
  const inputs = userInput.map(u => processInput(u).toSystem());
  try {
    const properties = await retrieveProperties(inputs);
    const response = await retrieveMetrics(inputs, properties);
    return response;
  } catch (e) {
    console.log(e);
    return new Result({
      error: e,
      message: 'Failed Results Page Query',
      status: 'fail',
    });
  }
}

/**
 * For now, use this input block for the suggested
 * links at the bottom of the page
 * (as indicated in the mockups)
 * Once we have the first iteration we
 * will write out more verbose queries for * you
 * that we'll put in in place of this query
 * To use, simply pass this value into firstPageResults
 * @type {Object}
 */
const suggestedInput = [
  {
    type: 'none',
    value: '',
  },
];

export { firstPageResults, suggestedInput };
