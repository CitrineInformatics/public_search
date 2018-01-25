class Result {
  /**
   * Class Representation of a response from one of the public lib endpts
   * @param  {string} config.status  enum("success", "warning", "error")
   * @param  {string} config.message
   * @param  {object} config.data    Data Object (data struct depends on endpt)
   * @param  {ErrorClass} config.error   An Instance of some error class
   */
  constructor(config) {
    this.status = config.status;
    this.message = config.message;
    this.data = config.data;
    this.error = config.error;
  }

  toJSON() {
    return JSON.stringify(this.data);
  }

  get hasNoErrors() {
    return this.error === undefined;
  }
}

export default Result;
