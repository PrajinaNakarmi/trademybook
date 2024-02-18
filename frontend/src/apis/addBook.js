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

export const addBook = async (props) => {
  const response = await axios.post(`${API_URL}/book/add`, props);
  if (response.status !== 201) throw new Error("Error adding book");
  console.log(Error);
  const data = await response.data.data;
  return data.data;
};
