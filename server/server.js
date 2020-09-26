const express = require('express');
const bodyParser = require('body-parser');
const variableNames = require('./serverVariableNames');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

// Router files.
const mapsRouter = require('./routes/maps.router');
app.use(variableNames.variableNames.routes.dataMapRouter.base, mapsRouter);

module.exports = app;
