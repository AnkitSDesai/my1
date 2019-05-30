const fetch = require("node-fetch");
req
async function getISS() {
  const api_Url = "https://api.wheretheiss.at/v1/satellites/25544";
  console.log("Before Fetch");
  const response = await fetch(api_Url);
  const data = await response.json();
  console.log("After Fetch");
  const { longitude, lat } = data;
  console.log(data);
}

getISS();
