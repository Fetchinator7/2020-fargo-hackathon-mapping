import { takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
import { variableNames } from '../../variableNames';
const LAUNCH = variableNames.dispatches.standard.requests.try.LAUNCH;

function* launch() {
}

function* launchSaga() {
  yield takeLatest(LAUNCH, launch);
}

export default launchSaga;
