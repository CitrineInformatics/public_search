import ProcessStep from 'models/pif/components/processStep';

export default function (processingDefinitions) {
  return processingDefinitions.map((pd) => {
    return (new ProcessStep(pd)).toJSON();
  });
}
