import axios from "axios";

const baseURL = process.env.REACT_APP_API_HOST;
const headers = { Accept: "application/vnd.api+json" };

export default axios.create({
  baseURL: `${baseURL}/api`,
  headers,
});
