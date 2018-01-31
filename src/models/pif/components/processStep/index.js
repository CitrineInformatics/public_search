import PifComponent from '../abstract';
import Instrument from '../instrument';
import Software from '../software';
import Value from '../value';

class ProcessStep extends PifComponent {
  constructor(rawProcessStep) {
    super();

    if (rawProcessStep.name) {
      this.name = rawProcessStep.name;
    }

    if (rawProcessStep.tags) {
      this.tags = rawProcessStep.tags;
    }

    if (rawProcessStep.instruments && Array.isArray(rawProcessStep.instruments)) {
      this.instruments = rawProcessStep.instruments.map(i => new Instrument(i));
    } else {
      this.instruments = [];
    }

    if (rawProcessStep.software && Array.isArray(rawProcessStep.software)) {
      this.software = rawProcessStep.software.map(s => new Software(s));
    } else {
      this.software = [];
    }

    if (rawProcessStep.details && Array.isArray(rawProcessStep.details)) {
      this.details = rawProcessStep.details.map(d => new Value(d));
    } else {
      this.details = [];
    }
  }

  toJSON() {
    const retJSON = {};

    if (this.name) {
      retJSON.name = this.name;
    }

    if (this.instruments.length > 0) {
      retJSON.instruments = this.instruments.map(i => i.toJSON());
    }

    if (this.software.length > 0) {
      retJSON.software = this.software.map(s => s.toJSON());
    }

    if (this.tags) {
      retJSON.tags = this.tags;
    }

    if (this.details.length > 0) {
      retJSON.details = this.details.map(d => d.toJSON());
    }

    return retJSON;
  }
}

export default ProcessStep;
