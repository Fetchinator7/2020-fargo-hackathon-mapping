const express = require('express');
const router = express.Router();
const variableNames = require('../serverVariableNames');
const dataMapRouter = variableNames.variableNames.routes.dataMapRouter;
const census = require('citysdk');

router.get(dataMapRouter.root, (req, res) => {
  // Do a get on the root.
  res.sendStatus(200);
});

router.get(dataMapRouter.age, async (req, res) => {
  const responseMap = await census(
    {
      vintage: 2019,
      geoHierarchy: {
        state: 28,
        // county: '*'
      },
      geoResolution: '5m',
      // sourcePath: ['acs', 'acs5'],
      // values: ['AGE', 'POP']
    },
    function (error, response) {
      // L.geoJson(response).addTo(map);
      console.log(`error: ${error} response: ${response}`);
      res.status(200).send(response);
    }
  );
  console.log(`res: ${responseMap}`);
  // res.sendStatus(200);
  // const responseMap = await axios.get('https://api.census.gov/data/2019/pep/charage?get=NAME,POP&for=state:01&key=348ee02e9af0237b32928b7a521ab5fc9fa9671a');
  // res.status(200).send(responseMap.data);
  // console.log(responseMap.data);
});

module.exports = router;
