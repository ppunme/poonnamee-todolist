import Api from "@/services/Api";

export default {
  login(credentials) {
    return Api().post("users/auth", credentials);
  },
  logout() {
    localStorage.removeItem("token");
  },
};
