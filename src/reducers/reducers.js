import { combineReducers } from "redux";
import * as Actions from "../actions/actions";

function shows(
  state = {
    isFetching: false,
    shows: [],
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_SHOWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case Actions.RECEIVE_SHOWS:
      return Object.assign({}, state, {
        isFetching: false,
        shows: action.shows,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search: shows,
});

export default rootReducer;
