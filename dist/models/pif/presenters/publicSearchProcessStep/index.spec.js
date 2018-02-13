'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleProcessStepInput = [{
  details: [{
    name: 'Temperature',
    scalars: [{
      value: '1323'
    }],
    units: 'K'
  }, {
    name: 'Time',
    scalars: [{
      value: '4800'
    }],
    units: 's'
  }, {
    name: 'Quench',
    scalars: [{
      value: 'Water quenched after solution treatment'
    }]
  }],
  name: 'Solution Treatment'
}];
var simpleProcessStepExpected = [{
  name: 'Solution Treatment',
  details: [{
    name: 'Temperature',
    value: '1323 K'
  }, {
    name: 'Time',
    value: '4800 s'
  }, {
    name: 'Quench',
    value: 'Water quenched after solution treatment'
  }]
}];
var complexDetailsProcessStepInput = [{
  name: 'JfhzrZu',
  details: [{
    name: 'BWRatfRnFRG',
    scalars: [{
      value: '59'
    }, {
      value: '62'
    }],
    units: 'cm'
  }, {
    name: 'qFzlDKqVKtzRdqKEbh',
    scalars: [{
      value: '56'
    }]
  }]
}, {
  name: 'jxfYagCmspDyURiU',
  details: [{
    name: 'ATgF',
    scalars: [{
      value: '85'
    }],
    units: 'wOO'
  }, {
    name: 'Qpjbt',
    scalars: [{
      value: '66'
    }],
    units: '%'
  }]
}, {
  name: 'rLkyxemuf',
  details: [{
    name: 'roAt',
    scalars: [{
      value: '28'
    }],
    units: 'XmxZPUpBaIzrFEzvMWs'
  }, {
    name: 'UtPJPMEYbGHVdl',
    scalars: [{
      value: '55'
    }],
    units: 'ZswOfXXY'
  }]
}, {
  name: 'TEnfEEfFGADOB',
  details: [{
    name: 'evhG',
    scalars: [{
      value: '94'
    }],
    units: 'JhEULqIJm'
  }, {
    name: 'vESKpFQuuHeVXHFsLdhr',
    scalars: [{
      value: '90'
    }],
    units: 'undByPOhErV'
  }]
}, {
  name: 'DvheeVIKzlhzRXXP',
  details: [{
    name: 'RazW',
    scalars: [{
      value: '22'
    }],
    units: '%'
  }]
}];
var complexDetailsProcessStepExpected = [{
  name: 'JfhzrZu',
  details: [{
    name: 'BWRatfRnFRG',
    value: '59 cm, 62 cm'
  }, {
    name: 'qFzlDKqVKtzRdqKEbh',
    value: '56'
  }]
}, {
  name: 'jxfYagCmspDyURiU',
  details: [{
    name: 'ATgF',
    value: '85 wOO'
  }, {
    name: 'Qpjbt',
    value: '66 %'
  }]
}, {
  name: 'rLkyxemuf',
  details: [{
    name: 'roAt',
    value: '28 XmxZPUpBaIzrFEzvMWs'
  }, {
    name: 'UtPJPMEYbGHVdl',
    value: '55 ZswOfXXY'
  }]
}, {
  name: 'TEnfEEfFGADOB',
  details: [{
    name: 'evhG',
    value: '94 JhEULqIJm'
  }, {
    name: 'vESKpFQuuHeVXHFsLdhr',
    value: '90 undByPOhErV'
  }]
}, {
  name: 'DvheeVIKzlhzRXXP',
  details: [{
    name: 'RazW',
    value: '22 %'
  }]
}];


it('should simplify scalars on export', function () {
  expect((0, _index2.default)(simpleProcessStepInput)).toEqual(simpleProcessStepExpected);
});

it('should simplify complicated scalars on export', function () {
  expect((0, _index2.default)(complexDetailsProcessStepInput)).toEqual(complexDetailsProcessStepExpected);
});