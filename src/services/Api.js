import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://candidate.neversitup.com/todo",
  });
};
