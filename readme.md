# Public Search API Interface

This lib contains very specific wrappers around Citrination's public API. 
In specific, it consists of 3 exposed methods.

See source code on [github](https://github.com/CitrineInformatics/public_search)

### General Usage

`npm install citrine-public-search`

`yarn add citrine-public-search`

Then just reference the package, `require('citrine-public-search')`.
The returned object literal will have the 3 methods described below
bound to it. 

### Results Page

```javascript
const citrinePublicSearch = require('citrine-public-search')

const userInput = <UserRequestObject>;
const <Result> = citrinePublicSearch.getResultsPageData(userInput);
```

###### UserRequestObject

The UserRequestObject is an array of Input objects
See src/models/input on github for Input definitions.
An example of this object can be found in examples/resultsPage

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the ResultsPage request can be found in examples/resultsPage/response

### Dataset Page

```javascript
const citrinePublicSearch = require('citrine-public-search')

const datasetId = <DatasetId>;
const <Result> = citrinePublicSearch.getDatasetPageData(datasetId);
```
###### DatasetId

The ID of the dataset you are requesting, as a `number` primitive

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the DatasetPage request can be found in examples/datasetPage/response


### Material Page

```javascript
const citrinePublicSearch = require('citrine-public-search')

const chemicalFormula = <ChemicalFormula>;
const <Result> = citrinePublicSearch.getMaterialPageData(datasetId);
```
###### ChemicalFormula

Just a `string` that represents a Chemical Formula. See examples/materialPage/request*.json for examples

###### Result

See models/result for implementation details. The `data` key corresponds to an
arbitrary object, which changes depending on endpoint.

An example of the `data` field of `Result` for the MaterialPage request can be found in examples/materialPage/response*.json

Note that, depending on the material you are searching for, you may not get back certain values. For example, `request.json` doesn't return dois, imageUrls, or processDefinitions, while `request2.json` doesn't return any table data (unlikely but can occur) or composition. Be prepared to handle disparate data cases, but expect top level keys to always be served consistently.
