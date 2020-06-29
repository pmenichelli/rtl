import { showsService } from "../services/shows-service";
// user actions
export const SEARCH_SHOWS = "SEARCH_SHOWS";

export function searchShows(query) {
  return {
    type: SEARCH_SHOWS,
    query,
  };
}

// network actions
export const REQUEST_SHOWS = "REQUEST_SHOWS";

export function requestShows(query) {
  return {
    type: REQUEST_SHOWS,
    query,
  };
}
export const RECEIVE_SHOWS = "RECEIVE_SHOWS";

export function receiveShows(query, shows) {
  return {
    type: RECEIVE_SHOWS,
    query,
    shows,
  };
}

export function fetchShows(query) {
  return function (dispatch) {
    dispatch(requestShows(query));

    return showsService(query).then((shows) =>
      dispatch(receiveShows(query, shows))
    );
  };
}
