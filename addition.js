const axios = require("axios");

const functions = {
  sub: (a, b) => a - b,
  getUser: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => console.log(res))
      .catch(err => "error");
  },
  add: (x, y) => x + y
};

module.exports = functions;
