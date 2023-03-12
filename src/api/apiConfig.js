const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "26c3b029c92ac28cd4225c870f1102c1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
