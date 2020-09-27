import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { variableNames } from '../../variableNames';
const LAUNCH = variableNames.dispatches.standard.requests.try.LAUNCH;
const SET_GET_MAPS_ERROR = variableNames.dispatches.standard.requests.catch.SET_GET_MAPS_ERROR;
const CLEAR_GET_MAPS_ERROR = variableNames.dispatches.standard.requests.catch.CLEAR_GET_MAPS_ERROR;
const SET_MAPS = variableNames.dispatches.standard.requests.try.SET_MAPS;
const ageURL = variableNames.routes.dataMapRouter.base + variableNames.routes.dataMapRouter.age;

function* launch() {
  try {
    yield put({ type: CLEAR_GET_MAPS_ERROR });
    const response = yield axios.get(ageURL);
    console.log(response.data.features);
    yield put({ type: SET_MAPS, payload: response.data.features });
  } catch (error) {
    yield put({ type: SET_GET_MAPS_ERROR });
    console.log('Error getting maps', error);
  }
}

function* launchSaga() {
  yield takeLatest(LAUNCH, launch);
}

export default launchSaga;
