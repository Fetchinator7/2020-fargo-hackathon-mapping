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
      vintage: 2017,
      geoHierarchy: {
        state: {
          lat: 28.466944,
          lng: -82.498148
        },
        county: '*'
      },
      geoResolution: '5m',
      sourcePath: ['acs', 'acs5', 'subject'],
      // Total!!Estimate!!Total population : S0102_C01_001E
      // 60 years and over!!Estimate!!Total population : S0102_C02_001E
      values: ['S0102_C01_001E', 'S0102_C02_001E']
    },
    function (error, response) {
      // L.geoJson(response).addTo(map);
      console.log(`error: ${error} response: ${response}`);
      res.status(200).send(response);
    }
  );
  console.log(`res: ${responseMap}`);
  // res.sendStatus(200);
});

module.exports = router;
