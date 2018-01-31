import index from './index';

const expected = [
  {
    name: 'Solution Treatment',
    details: [
      {
        name: 'Temperature',
        value: '1323 K',
      },
      {
        name: 'Time',
        value: '4800 s',
      },
      {
        name: 'Quench',
        value: 'Water quenched after solution treatment',
      },
    ],
  },
];

const processingDefinitions = [
  {
    details: [
      {
        name: 'Temperature',
        scalars: [
          {
            value: '1323',
          },
        ],
        units: 'K',
      },
      {
        name: 'Time',
        scalars: [
          {
            value: '4800',
          },
        ],
        units: 's',
      },
      {
        name: 'Quench',
        scalars: [
          {
            value: 'Water quenched after solution treatment',
          },
        ],
      },
    ],
    name: 'Solution Treatment',
  },
];

it ('should export in a specific way', () => {
  expect(index(processingDefinitions)).toEqual(expected);
});
