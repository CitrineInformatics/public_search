import PifComponent from '../abstract';

function plusMinus(useLatex) {
  return useLatex ? '$\\pm$' : '\u2213';
}

function isApproximate(value) {
  return (value.approximate === undefined) ? false : value.approximate;
}

function approximate(value) {
  return isApproximate(value) ? '~' : '';
}

function greaterOrEqual(useLatex) {
  return useLatex ? '$\\ge$' : '>=';
}

function greater(useLatex) {
  return useLatex ? '$\\gt$' : '>';
}

function lessOrEqual(useLatex) {
  return useLatex ? '$\\le$' : '>=';
}

function less(useLatex) {
  return useLatex ? '$\\lt$' : '<';
}

function toString(scalar, shouldUseLatex) {
  const useLatex = (typeof shouldUseLatex !== 'undefined') ? shouldUseLatex : true;

  // we define a heuristic to decide what field of the scalar to display
  if (scalar.value &&
      scalar.value.length > 0 &&
      scalar.uncertainty) {
    return (approximate(scalar.value) + scalar.value + plusMinus(useLatex) + scalar.uncertainty);
  } else if (scalar.value &&
             scalar.value.length > 0) {
    return approximate(scalar.value) + scalar.value;
  } else if (scalar.minimum &&
             scalar.minimum.length > 0 &&
             scalar.maximum &&
             scalar.maximum.length > 0) {
    return `${approximate({})} ${scalar.minimum} to ${scalar.maximum}`;
  } else if (scalar.minimum &&
             scalar.minimum.length > 0 &&
             scalar.inclusiveMinimum) {
    return greaterOrEqual(useLatex) + scalar.minimum;
  } else if (scalar.minimum &&
             scalar.minimum.length > 0) {
    return greater(useLatex) + scalar.minimum;
  } else if (scalar.maximum &&
             scalar.maximum.length > 0 &&
             scalar.inclusiveMaximum) {
    return lessOrEqual(useLatex) + scalar.maximum;
  } else if (scalar.maximum &&
             scalar.maximum.length > 0) {
    return less(useLatex) + scalar.maximum;
  }
  return '';
}


class Scalar extends PifComponent {
  constructor(rawScalar, presenter) {
    super(presenter);
    this.value = rawScalar.value;
    this.name = rawScalar.name;
    this.minimum = rawScalar.minimum;
    this.inclusiveMinimum = rawScalar.inclusiveMinimum === true;
    this.maximum = rawScalar.maximum;
    this.inclusiveMaximum = rawScalar.inclusiveMaximum === true;
    this.uncertainty = rawScalar.uncertainty;
    this.approximate = rawScalar.approximage === true;
    this.tags = rawScalar.tags;
  }

  toJSON() {
    return {
      name: this.name,
      minimum: this.minimum,
      inclusiveMinimum: this.inclusiveMinimum,
      maximum: this.maximum,
      inclusiveMaximum: this.inclusiveMaximum,
      uncertainty: this.uncertainty,
      approximate: this.approximate,
      tags: this.tags,
      value: this.value,
    };
  }

  toString() {
    if (this.presenter) {
      return this.present(this.presenter);
    }
    return `${toString(this)}`;
  }
}

export default Scalar;
