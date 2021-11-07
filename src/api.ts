import axios from "axios";
import config from "./config.json";
import AirtmEnv from "./interfaces/types/AirtmEnv";

let ENV: AirtmEnv = "sandbox";
const { baseURL } = config[ENV];

const api = axios.create({
  baseURL,
  auth: {
    username: "",
    password: "",
  },
});

export default api;
