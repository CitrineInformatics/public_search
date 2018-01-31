import PifComponent from '../abstract';

class FileReference extends PifComponent {
  constructor(rawFileReference) {
    super();
    this.relativePath = rawFileReference.relativePath;
    this.mimeType = rawFileReference.mimeType;
    this.sha256 = rawFileReference.sha256;
    this.md5 = rawFileReference.md5;
    this.tags = rawFileReference.tags;
  }

  toJSON() {
    return {
      relativePath: this.relativePath,
      mimeType: this.mimeType,
      sha256: this.sha256,
      md5: this.md5,
      tags: this.tags,
    };
  }
}

export default FileReference;
