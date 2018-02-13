'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (formula) {
  var query = {
    query: [{
      system: [{
        chemicalFormula: [{
          filter: [{
            equal: formula
          }]
        }],
        composition: [{
          element: [{
            analysis: [{
              type: 'categorical',
              path: 'element'
            }]
          }],
          actualWeightPercent: [{
            analysis: [{
              type: 'statistics',
              path: 'element.actualWeightPercent'
            }]
          }],
          actualAtomicPercent: [{
            analysis: [{
              type: 'statistics',
              path: 'element.actualAtomicPercent'
            }]
          }],
          idealWeightPercent: [{
            analysis: [{
              type: 'statistics',
              path: 'element.idealWeightPercent'
            }]
          }],
          idealAtomicPercent: [{
            analysis: [{
              type: 'statistics',
              path: 'element.idealAtomicPercent'
            }]
          }]
        }],
        properties: [{
          logic: 'SHOULD',
          file: [{
            relativePath: [{
              extractAs: 'image'
            }],
            mimeType: [{
              filter: [{
                equal: 'image'
              }]
            }]
          }]
        }, {
          name: [{
            analysis: [{
              type: 'categorical',
              path: 'property',
              size: 25
            }]
          }],
          value: [{
            analysis: [{
              type: 'categorical',
              path: 'property.units.categorical',
              size: 3
            }, {
              type: 'statistics',
              path: 'property.units.numeric'
            }]
          }],
          units: [{
            analysis: [{
              type: 'categorical',
              path: 'property.units',
              size: 1,
              missing: 'none'
            }]
          }]
        }],
        preparation: [{
          extractAs: 'preparation',
          extractAll: true
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
    size: 100,
    returnSystem: false,
    returnExtractedPath: false
  };
  return query;
};