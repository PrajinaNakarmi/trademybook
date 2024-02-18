import axios from "axios";
import { API_URL } from "../helpers/constants";

axios.interceptors.request.use((config) => {
  
  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("x-access-token="))
    ?.split("=")[1];
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export const getBookDetails = async (props) => {
  const response = await axios.post(`${API_URL}/book`, props);
  if (response.status !== 200) throw new Error("Error adding book");
  const data = await response.data;
  return data.book;
};
