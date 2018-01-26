class Input {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  toJSON() {
    return {
      type: this.type,
      value: this.value,
    };
  }
}

export default Input;
