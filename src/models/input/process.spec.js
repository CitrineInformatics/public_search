import process from './process';
import None from './none';

const simpleQuery = [
  {
    type: 'none',
    value: '',
  },
];

it ('should make a None type input', () => {
  expect(process(simpleQuery[0])).toBeInstanceOf(None);
});
