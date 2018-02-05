let mockFiles;

/*
  eslint no-underscore-dangle: ["error", { "allow": ["__setMockFiles"] }]
*/
function __setMockFiles(mock) {
  mockFiles = mock;
}

function readFile(path, params, cb) {
  cb(null, mockFiles);
}

module.exports = { __setMockFiles, readFile };
