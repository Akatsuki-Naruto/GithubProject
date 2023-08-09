import axios from "axios";

export const api = axios.create({
  baseURL:
    "http://localhost:3000/User",
});

export const sta = axios.create({
  baseURL:
  "http://localhost:3000/Status"
});