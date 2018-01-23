import Promise from 'promise';
import request from 'request';

const apiKey = '6ju1N2n4zLRqzZrNEo1xSQtt';
const headers = {
  'x-api-key': encodeURI(apiKey),
  'Content-Type': 'application/json',
  'X-Citrination-API-Version': '1.0.0',
};
const site = 'https://citrination.com';
// const datasetSearch = `${site}/search/dataset`;


function pifSearch(query) {
  return new Promise((resolve, reject) => {
    request.post({
      headers,
      url: `${site}/api/search/pif_search`,
      form: query,
    }, (error, response, body) => {
      if (response.statusCode === 200) {
        resolve({ body });
      } else {
        reject(new Error('Oops'));
      }
    });
  });
}

export { pifSearch };
