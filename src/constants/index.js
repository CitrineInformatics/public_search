import getChemicalFormulaHash from './chemicalFormulaHash';
import getPropertiesHash from './propertiesHash';

const fs = require('fs');

async function main() {
  try {
    const chemicalPrefill = await getChemicalFormulaHash();
    const propertiesPrefill = await getPropertiesHash();

    const finalPrefill = Object.assign(propertiesPrefill, chemicalPrefill);
    fs.writeFileSync('tmp/constants', JSON.stringify(finalPrefill));
    return finalPrefill;
  } catch (e) {
    throw (e);
  }
}

export default main;
