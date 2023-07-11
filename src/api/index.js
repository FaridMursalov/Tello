import axios from "axios";

const apiKey = "pk_test_52265674e4564de1447fcc7cdb276e8961b8f64985409";
const secretKey = "sk_52265c4f13e2b111656a3849758d760e7f3128c19db0c"
const  instance = axios.create({
  baseURL: "https://api.chec.io/v1",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": apiKey,
  },
});
export const  Register = axios.create({
  baseURL: "https://api.chec.io/v1/customers",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": secretKey,
  },
});

export default instance;
