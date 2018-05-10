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

RonsRouter.get('/nextquote', (req, res) => {
  Ron.aggregate().sample(1).then((ron)=> {
  res.send(ron[0]);
  })
});

//HOW TO TROUBLESHOOT
// RonsRouter.get('/', (req, res) => {
//   //res.send("test rons");
//   Ron.find().then((rons) => {
//     console.log(rons);
//   });
// });


RonsRouter.get('/:id', (req, res) => {
  let id = req.params.id;
  Ron.findById(id).then((ron) => {
    res.render('rons', {  //using rons because i want to have it updated on the same page
      templateRon: ron
    });
  }, (error) => {
    res.status(400).send("400 Bad Request");
  });
});

// RonsRouter.put('/:id', (req, res) => {
//   let id = req.params.id;
//   let updatedQuote = req.body.quote;
//
//   Ron.findByIdAndUpdate(id, {$set: {quote: updatedQuote}}, {new: true}).then((updatedQuote) => {
//     res.render('rons', {
//       templateRons: updatedQuote
//     });
//   }, (error) => {
//     res.status(400).send(error);
//   });
// });

RonsRouter.delete('/:id', (req, res) => {
  let id = req.params.id;
  let updatedQuote = req.body.quote;

  Ron.findByIdAndRemove(id).then((removedRon) => {
    res.redirect('/rons');
  }, (error) => {
    res.status(400).send("delete is getting an error");
  });
});


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
