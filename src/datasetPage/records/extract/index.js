function processHits(queryResponse, properties) {
  try {
    const chemicalFormulaEak = 'Chemical Formula'; // Eak is extractAs key
    const nameEak = 'Name';
    const columns = [{
      value: 'name',
      title: 'Name',
    }];

    properties.forEach((property) => {
      columns.push({
        value: property.name,
        title: property.units ? `${property.name} (${property.units})` : property.name,
      });
    });

    const rows = queryResponse.results.hits.map((hit) => {
      if (hit.extracted) {
        const returnBlock = {
          url: hit.id,
          name: hit.extracted[nameEak] || hit.extracted[chemicalFormulaEak],
        };

        properties.forEach((property) => {
          returnBlock[property.name] = hit.extracted[property.name];
        });
        return returnBlock;
      }
      return undefined;
    }).filter(item => item); // remove undefineds

    return [rows, columns];
  } catch (e) {
    console.log(e);
    return [[], []];
  }
}

function processRecordCount(queryResponse) {
  try {
    const recordCount = queryResponse.results.totalNumHits;
    return recordCount;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function main(queryResponse, properties) {
  const [rows, columns] = processHits(queryResponse, properties);
  const recordCount = processRecordCount(queryResponse);
  return { rows, columns, recordCount };
}

export default main;
