import axiosClient from "./axiosClient";

export const login = (body) => {
  axiosClient.post("/user/login/", body);
};

export const getCity = () => axiosClient.get("/cinemas/cities/");

export const getCinemas = () => axiosClient.get("/cinemas/cinema/");
