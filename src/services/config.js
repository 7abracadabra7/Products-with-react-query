import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data.data,
  (error) => Promise.reject(error)
);

export { api };
