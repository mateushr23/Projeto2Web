import Axios from "axios";

export const rootUrl = "http://www.recipepuppy.com";

export const Http = Axios.create({
  baseURL: rootUrl,
});
