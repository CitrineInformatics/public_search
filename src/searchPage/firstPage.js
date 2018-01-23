import { pifSearch } from '../client';
import propertyFromLiterals from './property/factory';

var fs = require("fs");

function firstPageResults(properties) {
  const query = {
    query: [{}],
  };

  query.query[0].system = properties.map(property => (
    propertyFromLiterals(property).toJSON()));

  // Add Aggregations Query
  query.query[0].system.push({
    properties: [
      {
        logic: "MUST",
        name: [
          {
            analysis: [
              {
                type: 'categorical',
                path: 'property',
                size: 5,
              },
            ],
          },
        ],
      },
    ],
  });
  fs.writeFileSync("/tmp/query", JSON.stringify(query))
  return pifSearch(query);
}

async function test () {
  try {
    let res = await firstPageResults([{
        name: 'Band Gap',
        min: 2,
        max: 7,
        units: 'eV',
      }, {
        name: 'Substrate',
        value: 'Aluminum',
        fromAutoComplete: true,
      },
    ])
    console.log("VALID RESPONSE");
    console.log(res);
    fs.writeFileSync("/tmp/a", res.body)

  } catch (e) {
    console.log("ERROR FIRED")
    console.log(e)
  }

}

test();
export default firstPageResults;
