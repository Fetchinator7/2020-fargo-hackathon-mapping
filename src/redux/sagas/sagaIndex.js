import { all } from 'redux-saga/effects';
import launchSaga from './launchSaga';

export default function* rootSaga() {
  yield all([
    launchSaga()
  ]);
}
