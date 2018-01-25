# Public Search API Interface

This lib contains very specific wrappers around Citrination's public API. 
In specific, it consists of 3 exposed methods

### General Usage



### Results Page

```javascript
import { getResultsPageData } from 'publicSearch';

const userInput = <UserRequestObject>;
const <Result> = getResultsPageData(userInput);
```

###### UserRequestObject

The UserRequestObject is an array of Property objects
See src/resultsPage/property directory for Property definitions.
An example of this object can be found in examples/resultsPage

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the ResultsPage request can be found in examples/resultsPage/response

### Dataset Page

```javascript
import { getDatasetPageData } from 'publicSearch';

const datasetId = <DatasetId>;
const <Result> = getDatasetPageData(datasetId);
```
###### DatasetId

The ID of the dataset you are requesting, as a `number` primitive

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the DatasetPage request can be found in examples/datasetPage/response


### Material Page

```javascript
import { getMaterialPageData } from 'publicSearch';

const chemicalFormula = <ChemicalFormula>;
const <Result> = getMaterialPageData(datasetId);
```
###### ChemicalFormula

Just a `string` that represents a Chemical Formula. See examples/materialPage/request*.json for examples

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the MaterialPage request can be found in examples/materialPage/response*.json

Note that, depending on the material you are searching for, you may not get back certain values. For example, `request.json` doesn't return dois, imageUrls, or processDefinitions, while `request2.json` doesn't return any table data (unlikely but can occur) or composition. Be prepared to handle disparate data cases, but expect top level keys to always be served consistently.
