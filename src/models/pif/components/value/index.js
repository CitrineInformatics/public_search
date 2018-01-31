import PifComponent from '../abstract';
import Scalar from '../scalar';
import FileReference from '../fileReference';

function compressScalars(scalars, units) {
  if (units) {
    return `${scalars.join(', ')} ${units}`;
  }
  return `${scalars.join(', ')}`;
}

class Value extends PifComponent {
  constructor(rawValue) {
    super();

    if (rawValue.name) {
      this.name = rawValue.name;
    }

    if (rawValue.units) {
      this.units = rawValue.units;
    }

    if (rawValue.tags) {
      this.tags = rawValue.tags;
    }

    if (rawValue.scalars && Array.isArray(rawValue.scalars)) {
      this.scalars = rawValue.scalars.map(s => new Scalar(s));
    } else {
      this.scalars = [];
    }

    if (rawValue.vectors && Array.isArray(rawValue.vectors)) {
      this.vectors = rawValue.vectors.map(v => new Scalar(v));
    } else {
      this.vectors = [];
    }

    if (rawValue.matrices && Array.isArray(rawValue.matrices)) {
      this.matrices = rawValue.matrices.map(m => new Scalar(m));
    } else {
      this.matrices = [];
    }

    if (rawValue.files && Array.isArray(rawValue.files)) {
      this.files = rawValue.files.map(f => new FileReference(f));
    } else {
      this.files = [];
    }
  }

  toJSON() {
    const retJSON = {};

    if (this.name) {
      retJSON.name = this.name;
    }

    if (this.units) {
      // retJSON.units = this.units;
    }

    if (this.tags) {
      retJSON.tags = this.tags;
    }

    if (this.scalars.length > 0) {
      retJSON.value = compressScalars(this.scalars.map(s => s.toString()), this.units);
    }

    if (this.vectors.length > 0) {
      this.vectors.map(v => v.toString(this.units));
    }

    if (this.matrices.length > 0) {
      this.matrices.map(m => m.toString(this.units));
    }

    if (this.files.length > 0) {
      this.files.map(f => f.toJSON());
    }

    return retJSON;
  }
}

export default Value;
