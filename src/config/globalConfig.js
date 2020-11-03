import Axios from "axios";

export const rootUrl = process.env.REACT_APP_API_URL;

export const Http = Axios.create({
  baseURL: rootUrl,
});
