import Input from './abstract';

const chemicalFormula = 'chemicalFormula';

class ChemicalFormula extends Input {
  constructor(value) {
    super(chemicalFormula, value);
  }

  toSystem() {
    return {
      logic: 'MUST',
      chemicalFormula: [
        {
          filter: {
            equal: this.value,
            exact: true,
          },
        },
      ],
    };
  }
}

ChemicalFormula.type = chemicalFormula;

export default ChemicalFormula;
