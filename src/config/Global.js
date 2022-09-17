import axios from "axios";

const config = {
  baseURL: "https://dummyjson.com/",
  utoken: localStorage.getItem("testToken"),
  axiosHandler: () => {
    return axios.create({
      baseURL: config.baseURL,
      headers: {
        Accept: "application/json",
        Authorization: config.utoken,
      },
    });
  },
};
export default config;
