const publicSearch = require('./dist/index.js');
const fs = require('fs');

// Sample request for results page data
publicSearch.getResultsPageData([{
  type: 'numericProperty',
  value: 'Band Gap',
  min: 0,
  max: 8,
  units: 'eV',
}]).then((res) => {
  fs.writeFileSync('tmp/results.complete.response.json', JSON.stringify(res.data));
});

// Sample request for a given material
publicSearch.getMaterialPageData('Fe.98C.02').then((res) => {
  fs.writeFileSync('tmp/material.complete.response.json', JSON.stringify(res.data));
});

// Sample Request for data that will populate the dataset page
publicSearch.getDatasetPageData(152980).then((res) => {
  fs.writeFileSync('tmp/dataset.complete.response.json', JSON.stringify(res.data));
});

// Sample Request for data that will return prefill search
publicSearch.getSearchPageData('[Original] σ·T').then((res) => {
  fs.writeFileSync('tmp/search.complete.response.json', JSON.stringify(res.data))
})
