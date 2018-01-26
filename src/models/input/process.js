import Abstract from './abstract';
import CategoricalProperty from './categoricalProperty';
import ChemicalFormula from './chemicalFormula';
import None from './none';
import NumericProperty from './numericProperty';

export default function (input) {
  if (input instanceof Abstract) {
    return input;
  }

  if (input.type) {
    switch (input.type) {
      case CategoricalProperty.type:
        return new CategoricalProperty(input.value, input.options);
      case ChemicalFormula.type:
        return new ChemicalFormula(input.value);
      case None.type:
        return new None(input.value);
      case NumericProperty.type:
        return new NumericProperty(input.value, input.min, input.max);
      default:
        throw new Error('Invalid Type Provided to Input Processor');
    }
  } else {
    return new Error('No type provided');
  }
}
