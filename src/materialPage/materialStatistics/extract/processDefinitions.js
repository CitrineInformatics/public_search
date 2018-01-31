import publicSearchPresenter from 'models/pif/presenters/publicSearchProcessStep';

export default (queryResponse) => {
  const preparations = [];
  if (queryResponse.results.hits) {
    queryResponse.results.hits.forEach((hit) => {
      if (hit.extracted && hit.extracted.preparation) {
        preparations.push(hit.extracted.preparation);
      }
    });
  }

  return publicSearchPresenter(preparations);
};
