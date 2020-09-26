const server = require('../start');
const request = require('supertest');
const variableNames = require('../serverVariableNames');
const dataMapRouter = variableNames.variableNames.routes.dataMapRouter;

const testServer = request.agent(server);

describe(`GET ${dataMapRouter.base}`, () => {
  it('Get to test route.', async (done) => {
    await testServer
      .get(`${dataMapRouter.base}`)
      .expect(200);
    done();
  });
});
