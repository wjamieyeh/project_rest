const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const RonRouter = require('./routes/rons');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
});


app.listen(port, () => {
  console.log(`REST project server is running on ${port}`);
});
