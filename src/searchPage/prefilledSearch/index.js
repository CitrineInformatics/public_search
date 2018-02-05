import Promise from 'promise';

const fs = require('fs');
const path = require('path');


/*
  eslint no-underscore-dangle: ["error", { "allow": ["__dirname"] }]
*/
const prefillPath = path.join(__dirname, '../../constants/prefill.json')

let searchHash;

function main() {
  return new Promise((resolve, reject) => {
    if (searchHash) {
      resolve(searchHash);
    } else {
      fs.readFile(prefillPath, 'utf8', (err, hash) => {
        if (err) {
          reject(new Error(err));
        } else {
          try {
            searchHash = JSON.parse(hash);
            resolve(searchHash);
          } catch (e) {
            reject(new Error(e))
          }
        }
      })
    }
  })
}

export default main;
