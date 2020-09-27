import { combineReducers } from 'redux';
import { variableNames } from '../../variableNames';
const catches = variableNames.dispatches.standard;

const SET_GET_MAPS_ERROR = catches.requests.catch.SET_GET_MAPS_ERROR;
const CLEAR_GET_MAPS_ERROR = catches.requests.catch.CLEAR_GET_MAPS_ERROR;

const getAllRoomsError = (state = '', action) => {
  switch (action.type) {
    case SET_GET_MAPS_ERROR:
      return 'Error getting the map data.';
    case CLEAR_GET_MAPS_ERROR:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  getAllRoomsError
});
