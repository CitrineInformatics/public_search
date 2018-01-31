import PifComponent from '../abstract';

class Software extends PifComponent {
  constructor(rawSoftware) {
    super();
    if (rawSoftware.name) {
      this.name = rawSoftware.name;
    }

    if (rawSoftware.version) {
      this.version = rawSoftware.version;
    }

    if (rawSoftware.producer) {
      this.producer = rawSoftware.producer;
    }

    if (rawSoftware.url) {
      this.url = rawSoftware.url;
    }

    if (rawSoftware.tags) {
      this.tags = rawSoftware.tags;
    }
  }

  toJSON() {
    const retJSON = {};

    if (this.name) {
      retJSON.name = this.name;
    }

    if (this.version) {
      retJSON.version = this.version;
    }

    if (this.producer) {
      retJSON.producer = this.producer;
    }

    if (this.url) {
      retJSON.url = this.url;
    }

    if (this.tags) {
      retJSON.tags = this.tags;
    }

    return retJSON;
  }
}

export default Software;
