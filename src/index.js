// app entry point to run server
const app = require('./app');

app.listen(app.get('port'), () => {
 console.log(`http://localhost:${app.get('port')}`)
})
