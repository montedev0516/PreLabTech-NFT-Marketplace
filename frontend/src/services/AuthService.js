import axios from "axios";
const url = "http://localhost:3000/api/";
export default {
  login(credentials) {
    return axios.post(url + "login/", credentials).then((response) => {
      // if(response.data.accessToken) {
      localStorage.setItem("data", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // }
      return response.data;
    });
  },
  logout() {
    localStorage.removeItem("data");
    localStorage.removeItem("user");
    const msg = "logouted!";
    return msg;
  },
  signUp(credentials) {
    return axios
      .post(url + "sign-up/", credentials)
      .then((response) => response.data);
  },
  getSecretContent() {
    return axios.get(url + "secret-route/").then((response) => response.data);
  },
};
