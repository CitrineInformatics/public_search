import Promise from 'promise';
import request from 'request';

const apiKey = '6ju1N2n4zLRqzZrNEo1xSQtt'; // prod

const headers = {
  'X-Api-Key': encodeURI(apiKey),
  'Content-Type': 'application/json',
  'X-Citrination-API-Version': '1.0.0',
};
const site = 'https://citrination.com';

function isValidResponse(response) {
  return response && response.statusCode === 200;
}

function pifSearch(query) {
  return new Promise((resolve, reject) => {
    request.post({
      headers,
      url: `${site}/api/search/pif_search`,
      body: JSON.stringify(query),
    }, (error, response, body) => {
      if (isValidResponse(response)) {
        resolve({ body });
      } else {
        reject(new Error(error));
      }
    });
  });
}

function datasetSearch(query) {
  return new Promise((resolve, reject) => {
    request.post({
      headers,
      url: `${site}/api/search/dataset`,
      body: JSON.stringify(query),
    }, (error, response, body) => {
      if (isValidResponse(response)) {
        resolve({ body });
      } else {
        reject(new Error(error));
      }
    });
  });
}

/**
 * Takes an array of imagePath objects and returns their presignedurls
 * @param  {string} imagePath.set       Dataset ID
 * @param  {string} imagePath.version   Dataset Version ID
 * @param  {string} imagePath.path      Path From Query
 * @return {Promise}            Promise containing presignedUrl values
 */
function imagePresignedUrls(imagePaths) {
  return Promise.all(imagePaths.map((imagePath) => {
    const url = `${site}/api/datasets/${imagePath.set}/version/${imagePath.version}/url/${imagePath.path}`;
    return new Promise((resolve, reject) => {
      request.get({ headers, url }, (error, response, body) => {
        if (isValidResponse(response)) {
          resolve({ body });
        } else {
          reject(new Error('Oops'));
        }
      });
    });
  }));
}


export { pifSearch, imagePresignedUrls, datasetSearch };
