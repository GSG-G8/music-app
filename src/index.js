// app entry point to run server
const app = require('./app');
const fetch = require('node-fetch')

//// testing fetch from api (to remove)

const dotenv = require('dotenv').config();
const apiKey = dotenv.parsed.API_KEY;

fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=test&api_key=${apiKey}&format=json&limit=3`)
.then(res => res.json())
.then(res => console.log(res.results.albummatches.album[0].artist))

//// testing fetch from api (to remove)


app.listen(app.get('port'), () => {
 console.log(`http://localhost:${app.get('port')}`)
})
