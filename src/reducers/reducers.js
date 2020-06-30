import { combineReducers } from "redux";
import * as Actions from "../actions/actions";

function search(
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

function episodes(
  state = {
    isFetching: false,
    list: [],
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_EPISODES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case Actions.RECEIVE_EPISODES:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.episodes,
      });
    default:
      return state;
  }
}

function show(
  state = {
    isFetching: false,
    info: null,
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_SHOW:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case Actions.RECEIVE_SHOW:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.show,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  search,
  show,
  episodes,
});

export default rootReducer;
