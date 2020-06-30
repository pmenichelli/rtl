import axios from "axios";

const BASE_URL = "http://api.tvmaze.com";

export function search(query) {
  const config = {
    params: {
      q: query,
    },
  };

  return axios
    .get(`${BASE_URL}/search/shows`, config)
    .then((response) => {
      return response.data.map((result) => result.show);
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

export function episodes(showId) {
  return axios
    .get(`${BASE_URL}/shows/${showId}/episodes`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}

export function getById(showId) {
  return axios
    .get(`${BASE_URL}/shows/${showId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
