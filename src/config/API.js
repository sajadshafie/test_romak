import config from "./Global";

export default {
  login: (body) => {
    return config.axiosHandler().post("auth/login", body);
  },
  getProduct: () => {
    return config.axiosHandler().get("auth/products");
  },
};
