const api_key =
  "live_SwyMIPFzfm9SDeOT7V0GvU8PstZ7UvqosRK3BFtq21WJxstRuPKaYHZdWZK7vugt";
// get breed
// const url = `https://api.thecatapi.com/v1/breeds`;

// get IMAGE
const url = `https://api.thecatapi.com/v1/images/search?api_key=${api_key}&
limit=2&has_breeds=1`;

const fetch = require("node-fetch");
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
