import property from './abstract';

class NumericProperty extends property {
  /**
   * @param {string} name - Property Name
   * @param  {number} min - Min value provided by user
   * @param  {number} max - Max value provided by user
   * @param  {[string]} units - Units for the given value
   */
  constructor(name, min, max, units) {
    super(name);
    this.min = min;
    this.max = max;
    this.units = units;
  }

  toJSON() {
    const query = {
      logic: 'MUST',
      properties: [{
        name: {
          filter: {
            equal: this.name,
            exact: true,
          },
        },
        value: {
          filter: {
            min: this.min,
            max: this.max,
          },
        },
      }],
    };
    if (this.units) {
      query.properties[0].units = {
        filter: {
          exact: true,
          equal: this.units,
        },
      };
    }
    return query;
  }
}

export default NumericProperty;
