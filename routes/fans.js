const express = require('express');
const mongoose = require('./../db/mongoose');
const FansRouter = express.Router();
const Ron = require('./../models/ron');

FansRouter.use(express.static( "public" ) );

FansRouter.get('/', (req, res) => {
  Ron.find().then((rons) => {
  res.render('fans', {
    templateRons: rons
  });
}, (error) => {
  res.status(400).send(error);
  })
});

FansRouter.post('/', (req, res) => {
  let newRon = new Ron({
    quote: req.body.quote
  });

  newRon.save().then((ron) => {
    res.redirect('/fans');
  }, (error) => {
    res.status(400).send("You didn't add any quotes...");
  });
});

module.exports = FansRouter;
