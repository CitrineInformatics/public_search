import { imagePresignedUrls } from 'client';

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
      fs.writeFileSync('tmp/2.1.1intermediate', JSON.stringify(imagePaths));
      s3ImagePaths = imagePaths.map(b => JSON.parse(b.body).url);
    }

    return s3ImagePaths;
  } else {
    return filePaths;
  }
}

export default extractImagePaths;
