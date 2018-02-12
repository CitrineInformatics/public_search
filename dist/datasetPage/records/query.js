'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function buildProperty(propertyName, propertyUnits) {
  var name = [{
    filter: [{ equal: propertyName, exact: true }]
  }];

  var value = [{ extractAs: propertyName }];

  var units = [{
    filter: [{ equal: propertyUnits || '' }], // Leace empty if no units
    extractAs: propertyName + ' units'
  }];

  return {
    logic: 'OPTIONAL',
    value: value,
    name: name,
    units: units
  };
}

function buildQuery(datasetId, properties) {
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
          extractAs: 'Chemical Formula'
        }],
        names: [{
          extractAs: 'Name'
        }],
        properties: [{
          logic: 'OPTIONAL',
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
        }]
      }]
    }],
    size: 25,
    addLatex: true,
    returnSystem: false,
    returnExtractedPath: false
  };

  properties.forEach(function (property) {
    query.query[0].system[0].properties.push(buildProperty(property.name, property.units));
  });

  return query;
}

exports.default = buildQuery;