import retrieveProperties from './properties';
import retrieveMetrics from './metrics';
import Result from 'models/result';
import { process as processInput } from 'models/input';


async function firstPageResults(userInput) {
  const inputs = userInput.map(u => processInput(u).toSystem());
  try {
    const properties = await retrieveProperties(inputs);
    const response = await retrieveMetrics(inputs, properties);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return new Result({
      error: e,
      message: "Failed Results Page Query",
      status: 'fail',
    });
  }
}

firstPageResults([{type: "none", value: "Band Gap"}]).then(function (res) {
  console.log(res)
});

export default firstPageResults;
