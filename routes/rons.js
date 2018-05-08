const express = require('express');
const mongoose = require('./../db/mongoose');
const Ron = require('./../models/ron');
const RonsRouter = express.Router();


RonsRouter.get('/', (req, res) => {
  Ron.find().then((rons) => {
  res.render('rons', {
    templateRons: rons
  });
}, (error) => {
  res.status(400).send(error);
  })
});


//HOW TO TROUBLESHOOT
// RonsRouter.get('/', (req, res) => {
//   //res.send("test rons");
//   Ron.find().then((rons) => {
//     console.log(rons);
//   });
// });


RonsRouter.post('/', (req, res) => {
  let newRon = new Ron({
    quote: req.body.quote
  });

  newRon.save().then((ron) => {
    res.redirect('/rons');
  }, (error) => {
    res.status(400).send("400 Bad Request");
  });
});


module.exports = RonsRouter;
