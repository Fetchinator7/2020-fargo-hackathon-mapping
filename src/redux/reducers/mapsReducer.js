import { combineReducers } from 'redux';
import { variableNames } from '../../variableNames';
const request = variableNames.dispatches.standard.requests.try;

const SET_MAPS = request.SET_MAPS;

const maps = (state = [], action) => {
  switch (action.type) {
    case SET_MAPS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  maps
});
