import Numeric from './numeric';
import Categorical from './categorical';

/*
  Sample Property
  {
    propertyName: "Band Gap", //string
    min: 0, //optional, number
    max: 7, //optional, number
    units: "eV" //string
    value: "Steel" //optional, string
    exact: true // IF autocomplete
  }
*/


/**
 * Instantiate appropriate properties based on input
 * @param  {object} property See Class Implemnentations for detail
 * @return {object[]}          Array of Property Instances
 */
export default (property) => {
  // Must be numeric
  if (property.min && property.max) {
    return new Numeric(
      property.name,
      property.min,
      property.max,
      property.units,
    );
  }

  return new Categorical(
    property.name,
    property.value,
    property.fromAutoComplete,
  );
};
