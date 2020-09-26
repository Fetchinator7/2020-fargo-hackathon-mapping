import { combineReducers } from 'redux';
import login from './loginStatusReducer';
import account from './accountReducer';
import errors from './errorsReducer';
import rooms from './roomsReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

const rootReducer = combineReducers({
  login,
  account,
  errors,
  rooms
});

export default rootReducer;
