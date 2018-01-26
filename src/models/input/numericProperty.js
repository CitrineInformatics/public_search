import Input from './abstract';

const numericProperty = 'numericProperty';

class NumericProperty extends Input {
  constructor(value, min, max, units) {
    super(numericProperty, value);
    this.units = units;
    this.min = min;
    this.max = max;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      min: this.min,
      max: this.max,
      units: this.units,
    };
  }

  toSystem() {
    return {
      logic: 'MUST',
      properties: [
        {
          name: {
            filter: {
              equal: this.value,
              exact: true,
            },
          },
          value: {
            filter: {
              min: this.min,
              max: this.max,
            },
          },
          units: {
            filter: {
              equal: this.units,
              exact: true,
            },
          },
        },
      ],
    };
  }
}

NumericProperty.type = numericProperty;

export default NumericProperty;
