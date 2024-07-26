import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
