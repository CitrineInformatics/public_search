import Input from './abstract';

const none = 'none';

class None extends Input {
  constructor(value) {
    super(none, value);
  }

  toSystem() {
    return {
      logic: 'SHOULD',
      simple: this.value,
    };
  }
}

None.type = none;

export default None;
