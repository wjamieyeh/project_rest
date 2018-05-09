const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//resources
const mongoose = require('mongoose');
const RonsRouter = require('./routes/rons');
const FansRouter = require('./routes/fans');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))


app.use('/rons', RonsRouter);
app.use('/fans', FansRouter);

app.set('view engine', 'ejs');

app.use(express.static( "public" ) );

app.get('/', (req, res) => {
  res.render('home')
});

// app.get('/test', (req, res) => {
  // console.log('Test Works');
//   res.send('Works')
// })


app.listen(port, () => {
  console.log(`REST project server is running on ${port}`);
});
