import index from './index';

import simpleProcessStepInput from './spechelper/simpleProcessStep/input.json';
import simpleProcessStepExpected from './spechelper/simpleProcessStep/expected.json';

import complexDetailsProcessStepInput from './spechelper/complexDetailsProcessStep/input.json';
import complexDetailsProcessStepExpected from './spechelper/complexDetailsProcessStep/expected.json';

it('should simplify scalars on export', () => {
  expect(index(simpleProcessStepInput)).toEqual(simpleProcessStepExpected);
});

it('should simplify complicated scalars on export', () => {
  expect(index(complexDetailsProcessStepInput)).toEqual(complexDetailsProcessStepExpected);
});
