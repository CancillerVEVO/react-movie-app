import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

export const movieApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

movieApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  config.headers["Authorization"] = token ? `Bearer ${token}` : undefined;

  return config;
});
