'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processHits(queryResponse, properties) {
  try {
    var chemicalFormulaEak = 'Chemical Formula'; // Eak is extractAs key
    var nameEak = 'Name';
    var columns = [{
      value: 'name',
      title: 'Name'
    }];

    properties.forEach(function (property) {
      columns.push({
        value: property.name,
        title: property.units ? property.name + ' (' + property.units + ')' : property.name
      });
    });

    var rows = queryResponse.results.hits.map(function (hit) {
      if (hit.extracted) {
        var returnBlock = {
          url: hit.id,
          name: hit.extracted[nameEak] || hit.extracted[chemicalFormulaEak]
        };

        properties.forEach(function (property) {
          returnBlock[property.name] = hit.extracted[property.name];
        });
        return returnBlock;
      }
      return undefined;
    }).filter(function (item) {
      return item;
    }); // remove undefineds

    return [rows, columns];
  } catch (e) {
    console.log(e);
    return [[], []];
  }
}

function processRecordCount(queryResponse) {
  try {
    var recordCount = queryResponse.results.totalNumHits;
    return recordCount;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function main(queryResponse, properties) {
  var _processHits = processHits(queryResponse, properties),
      _processHits2 = (0, _slicedToArray3.default)(_processHits, 2),
      rows = _processHits2[0],
      columns = _processHits2[1];

  var recordCount = processRecordCount(queryResponse);
  return { rows: rows, columns: columns, recordCount: recordCount };
}

exports.default = main;