const express = require('express');
const mongoose = require('./../db/mongoose');
const FansRouter = express.Router();
const Ron = require('./../models/ron');


FansRouter.get('/', (req, res) => {
  Ron.find().then((rons) => {
  res.render('fans', {
    templateRons: rons
  });
}, (error) => {
  res.status(400).send(error);
  })
});


module.exports = FansRouter;
