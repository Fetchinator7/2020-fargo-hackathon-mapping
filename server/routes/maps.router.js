const express = require('express');
const router = express.Router();
const variableNames = require('../serverVariableNames');
const dataMapRouter = variableNames.variableNames.routes.dataMapRouter;

router.get(dataMapRouter.root, (req, res) => {
  // Do a get on the root.
  res.sendStatus(200);
});

module.exports = router;
