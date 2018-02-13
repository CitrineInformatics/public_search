'use strict';

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectedQuery = {
  query: [{
    system: [{
      simple: 'a string'
    }, {
      logic: 'MUST',
      properties: [{
        name: [{
          analysis: [{
            type: 'categorical',
            path: 'property',
            size: 5
          }]
        }]
      }]
    }]
  }],
  size: 0
};

test('Properly interpolates a query', function () {
  expect((0, _query2.default)([{ simple: 'a string' }])).toEqual(expectedQuery);
});