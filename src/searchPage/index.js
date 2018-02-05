import getPrefilledHash from './prefilledSearch';
import Result from 'models/result';

async function getPrefilledSearch(search) {
  try {
    const prefilledHash = await getPrefilledHash();
    const result = [];

    Object.keys(prefilledHash).forEach(key => {
      if (search && key.indexOf(search) > -1) {
        result.push(prefilledHash[key]);
      }
    });

    return new Result({
      status: 'success',
      message: 'Successfully retrieved Seach page prefill data',
      data: result
    });
  } catch (e) {
    return new Result({
      status: 'fail',
      message: 'Failed to retrieve Seach page prefill data',
      error: e
    });
  }
}

export default getPrefilledSearch;
