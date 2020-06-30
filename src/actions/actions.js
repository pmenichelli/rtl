import * as ShowsService from "../services/shows-service";

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

export const REQUEST_EPISODES = "REQUEST_EPISODES";
export function requestEpisodes(showId) {
  return {
    type: REQUEST_EPISODES,
    showId,
  };
}

export const RECEIVE_EPISODES = "RECEIVE_EPISODES";
export function receiveEpisodes(showId, episodes) {
  return {
    type: RECEIVE_EPISODES,
    showId,
    episodes,
  };
}

export const REQUEST_SHOW = "REQUEST_SHOW";
export function requestShow(showId) {
  return {
    type: REQUEST_SHOW,
    showId,
  };
}

export const RECEIVE_SHOW = "RECEIVE_SHOW";
export function receiveShow(showId, show) {
  return {
    type: RECEIVE_SHOW,
    showId,
    show,
  };
}

export function fetchShows(query) {
  return function (dispatch) {
    dispatch(requestShows(query));

    return ShowsService.search(query).then((shows) =>
      dispatch(receiveShows(query, shows))
    );
  };
}

export function fetchEpisodes(showId) {
  return function (dispatch) {
    dispatch(requestEpisodes(showId));

    return ShowsService.episodes(showId).then((episodes) =>
      dispatch(receiveEpisodes(showId, episodes))
    );
  };
}

export function fetchShow(showId) {
  return function (dispatch) {
    dispatch(requestShow(showId));

    return ShowsService.getById(showId).then((show) =>
      dispatch(receiveShow(showId, show))
    );
  };
}
