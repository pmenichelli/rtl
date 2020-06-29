import axios from "axios";

const BASE_URL = "http://api.tvmaze.com";

export function showsService(query) {
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
      console.log(error);
      return Promise.reject(error);
    });
}
