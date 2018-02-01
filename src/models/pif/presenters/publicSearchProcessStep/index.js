import ProcessStep from 'models/pif/components/processStep';

export default function (preparation) {
  return preparation.map(pd => (new ProcessStep(pd)).toJSON());
}
