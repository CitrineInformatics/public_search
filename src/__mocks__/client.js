let pifSearchResponse = { body: '"{}"' };

function pifSearch() {
  return pifSearchResponse;
}

function datasetSearch() {

}

function imagePresignedUrls() {

}

/*
  eslint no-underscore-dangle: ["error", { "allow": ["__setPifSearchResponse"] }]
*/
function __setPifSearchResponse(results) {
  pifSearchResponse = { body: JSON.stringify(results) };
}

export { pifSearch, datasetSearch, imagePresignedUrls, __setPifSearchResponse };
