import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // Base URL API
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menambahkan token jika dibutuhkan
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
