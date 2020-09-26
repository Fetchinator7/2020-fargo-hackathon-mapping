import { all } from 'redux-saga/effects';
import loginSaga from './launchSaga';
import roomsSaga from './roomsSaga';
import usersSaga from './usersSaga';
import { openSocket } from './socketIndex';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    roomsSaga(),
    usersSaga(),
    openSocket()
  ]);
}
