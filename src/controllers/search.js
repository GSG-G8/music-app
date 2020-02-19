const fetch = require('node-fetch');
const dotenv = require('dotenv').config();


const search = (req,res)=>{
  console.log(req.body.name)

  const url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=test&api_key=${process.env.API_KEY}&format=json&limit=3`;
  fetch(url)
    .then(res => res.json())
    // .then(res => console.log(res.results.albummatches.album[1].artist))
    .catch(err => res.status(500));
}

module.exports = search;