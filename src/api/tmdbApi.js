import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";

export const category = {
  movie: "movie",
  // tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = `movie/${movieType[type]}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url, params);
  },

  getTvList: (type, params) => {
    // const url = "tv/" + tvType[type];
    const url = `tv/${tvType[type]}?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    // const url = category[cate] + "/" + id + "/similar";
    const url = `${category[cate]}/${id}/similar?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url, { params: {} });
  },
};

const tmdbApi_1 = {
  getMoviesList: () => {
    const url = "movies/";
    // console.log(url);
    return axiosClient.get(url);
  },
  getVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos?api_key=${apiConfig.apiKey}`;
    return axiosClient.get(url);
  },
  // search: (cate, params) => {
  //   const url = "search/" + category[cate];
  //   return axiosClient.get(url, params);
  // },
  // detail: (cate, id, params) => {
  //   const url = category[cate] + "/" + id;
  //   return axiosClient.get(url, params);
  // },
  // credits: (cate, id) => {
  //   const url = category[cate] + "/" + id + "/credits";
  //   return axiosClient.get(url, { params: {} });
  // },
  // similar: (cate, id) => {
  //   // const url = category[cate] + "/" + id + "/similar";
  //   const url = `${category[cate]}/${id}/similar?api_key=${apiConfig.apiKey}`;
  //   return axiosClient.get(url, { params: {} });
  // },
};

// export default tmdbApi;
export default tmdbApi_1;
