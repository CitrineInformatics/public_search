import getChemicalFormulaHash from './chemicalFormulaHash';
import getPropertiesHash from './propertiesHash';

async function main() {
  try {
    const chemicalPrefill = await getChemicalFormulaHash();
    const propertiesPrefill = await getPropertiesHash();

    const finalPrefill = Object.assign(propertiesPrefill, chemicalPrefill);
    return finalPrefill;
  } catch (e) {
    throw (e);
  }
}

export default main;
