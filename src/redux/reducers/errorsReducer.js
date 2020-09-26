import { combineReducers } from 'redux';
import { variableNames } from '../../variableNames';
const catches = variableNames.dispatches.standard;

const SET_GET_INFO_ON_LAUNCH_ERROR = catches.requests.catch.SET_GET_INFO_ON_LAUNCH_ERROR;
const CLEAR_GET_INFO_ON_LAUNCH_ERROR = catches.requests.catch.CLEAR_GET_INFO_ON_LAUNCH_ERROR;

const getAllRoomsError = (state = '', action) => {
  switch (action.type) {
    case SET_GET_INFO_ON_LAUNCH_ERROR:
      return 'Error getting the different rooms.';
    case CLEAR_GET_INFO_ON_LAUNCH_ERROR:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  getAllRoomsError
});
