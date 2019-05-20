// const cool = require('cool-ascii-faces')
// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000


// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/test'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("<h1>Welcome to express</h1>")
});

app.listen(process.env.PORT, function() {
  console.log('Server is listening!');
})