import PifComponent from '../abstract';

class Instrument extends PifComponent {
  constructor(rawInstrument) {
    super();
    this.name = rawInstrument.name;
    this.model = rawInstrument.model;
    this.producer = rawInstrument.producer;
    this.url = rawInstrument.url;
    this.tags = rawInstrument.tags;
  }

  toJSON() {
    return {
      name: this.name,
      model: this.model,
      producer: this.producer,
      url: this.url,
      tags: this.tags,
    };
  }
}

export default Instrument;
