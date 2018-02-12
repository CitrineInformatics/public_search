'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (datasetId) {
  var query = {
    query: [{
      dataset: [{
        id: [{
          filter: [{
            equal: datasetId,
            exact: true
          }]
        }]
      }],
      system: [{
        chemicalFormula: [{
          analysis: [{
            type: 'categorical',
            path: 'chemicalFormula'
          }]
        }],
        names: [{
          analysis: [{
            type: 'categorical',
            path: 'name'
          }]
        }],
        properties: [{
          name: [{
            analysis: [{
              type: 'categorical',
              path: 'property',
              size: 3
            }]
          }],
          units: [{
            analysis: [{
              type: 'categorical',
              path: 'property.units',
              size: 1
            }]
          }]
        }],
        references: [{
          doi: [{
            analysis: [{
              type: 'categorical',
              path: 'doi'
            }]
          }]
        }]
      }]
    }],
    size: 1
  };
  return query;
};