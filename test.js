const publicSearch = require('./dist/index.js');
const fs = require('fs');

publicSearch.getResultsPageData([{
  type: 'numericProperty',
  value: 'Band Gap',
  min: 0,
  max: 8,
  units: 'eV',
}]).then((res) => {
  fs.writeFileSync('tmp/results.complete.response.json', JSON.stringify(res.data));
});


publicSearch.getMaterialPageData('SiO2').then((res) => {
  fs.writeFileSync('tmp/material.complete.response.json', JSON.stringify(res.data));
});
