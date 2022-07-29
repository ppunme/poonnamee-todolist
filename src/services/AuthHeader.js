//get token from local storage
const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (token && token.token) {
    return { Authorization: "Bearer " + token.token };
  } else {
    return {};
  }
};

export default authHeader;
