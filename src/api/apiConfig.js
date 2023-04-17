import urlApi from "./apiPath";
// const apiConfig = {
//   baseUrl: urlApi,
//   apiKey: "26c3b029c92ac28cd4225c870f1102c1",
//   originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
//   w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
// };

const apiConfig = {
  baseUrl: urlApi,
  originalImage: (imgPath) =>
    `http://192.168.1.51:8000/movies/banner/${imgPath}/`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
