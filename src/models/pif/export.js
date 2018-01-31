import ProcessStep from './components/processStep';

export default function (processDefinitions) {
  processDefinitions.map(pd => new ProcessStep(pd));
}