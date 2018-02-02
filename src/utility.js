import { imagePresignedUrls } from 'client';

function processPropertyValue(unitAnalysis, units) {
  let returnString = '';
  if (unitAnalysis.numeric.count > 1) {
    returnString += `${unitAnalysis.numeric.min} - ${unitAnalysis.numeric.max}`;
  } else {
    returnString += `${unitAnalysis.categorical.buckets[0].value}`;
  }

  if (units) {
    returnString += ` ${units}`;
  }

  return returnString;
}

async function extractImagePaths(queryResponse) {
  const filePaths = [];
  if (queryResponse.results.hits) {
    queryResponse.results.hits.forEach((hit) => {
      if (hit.extracted && hit.extracted.image) {
        filePaths.push({
          set: hit.dataset,
          version: hit.datasetVersion,
          path: hit.extracted.image,
        });
      }
    });

    let s3ImagePaths = [];
    if (filePaths.length > 0) {
      // if there are some images to fetch
      const imagePaths = await imagePresignedUrls(filePaths);
      s3ImagePaths = imagePaths.map(b => JSON.parse(b.body).url);
    }
    return s3ImagePaths;
  } else {
    return filePaths;
  }
}

export { processPropertyValue, extractImagePaths };
