const fetch = require('node-fetch');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();


const search = (req, res, next) => {
  const query = req.body.input;

  const url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${process.env.API_KEY}&format=json&limit=12`;
  fetch(url)
    .then((result) => result.json())
    .then((result) => {
      const ourresult = result.results.albummatches.album;
      console.log(ourresult);
      res.json(ourresult);
    })
    .catch((err) => next(err));
};

module.exports = search;
