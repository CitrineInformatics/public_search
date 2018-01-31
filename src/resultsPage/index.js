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

export default firstPageResults;
