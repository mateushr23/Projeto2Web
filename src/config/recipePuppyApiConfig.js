import Axios from "axios";

export const rootUrl = "https://www.balldontlie.io/";

export const Http = Axios.create({
  baseURL: rootUrl,
});
