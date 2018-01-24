import property from './abstract';

class CategoricalProperty extends property {
  /**
   * @param  {string} value - The categorical or
   *   string value of the property
   * @param  {[boolean]} fromAutoComplete - Pass true
   *   if this value came from a auto-completed field.
   *   If the user just typed something in and didn't click
   *   an autofill, pass falsy or leave blank
   * @param {string} name - Property Name
   */
  constructor(name, value, fromAutoComplete) {
    super(name);
    this.value = value;
    this.fromAutoComplete = fromAutoComplete;
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
            equal: this.value,
          },
        },
      }],
    };
    if (this.fromAutoComplete) {
      query.properties[0].value.filter.exact = true;
    }
    return query;
  }
}

export default CategoricalProperty;
