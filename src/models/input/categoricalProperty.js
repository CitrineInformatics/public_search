import Input from './abstract';

const categoricalProperty = 'categoricalProperty';

function filters(options) {
  return options.map(opt => ({
    logic: 'SHOULD',
    equal: opt,
    exact: true,
  }));
}

class CategoricalProperty extends Input {
  constructor(value, options) {
    super(categoricalProperty, value);
    this.options = options;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      options: this.options,
    };
  }

  toSystem() {
    return {
      logic: 'MUST',
      properties: [{
        name: {
          filter: {
            equal: this.value,
            exact: true,
          },
        },
        value: {
          filter: filters(this.options),
        },
      }],
    };
  }
}

CategoricalProperty.type = categoricalProperty;

export default CategoricalProperty;
