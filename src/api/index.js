import axios from "axios";

const apiKey = "pk_test_52265674e4564de1447fcc7cdb276e8961b8f64985409";
const instance = axios.create({
  baseURL: "https://api.chec.io/v1",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": apiKey,
  },
});

export default instance;
