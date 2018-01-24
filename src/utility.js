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

export { processPropertyValue };
