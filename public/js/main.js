$(function () {

  const $displayQuote = $('#external');
  const $yes = $('#yes');
  const $no = $('#no');
  const $start = $('#start');
  // const mongoose = require('./../db/mongoose');
  // const Ron = require('./../models/ron');


  //check if number is even: true, false
  const isEven = () => {
    let randomNum =  Math.floor(Math.random() * 20);
    if (randomNum % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  $start.click(function() {
    startGuess();
    $(this).text("Next Quote");
  });

  $yes.click(function() {
    console.log('yes click is working');
  });

  $no.click(function() {
    console.log('no click is working');
  });

  //if number is even, pull from API, else pull from my collection
  const startGuess = function () {

    if (isEven()) {
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => {
          $('#external').text(`" ${response.data} "`);
        });
    } else {
      // need to modify the link once i deploy to heroku
      axios.get('http://localhost:3000/rons/nextquote')
      .then(response => {
        let quote = JSON.stringify(response.data);
        $('#external').text(quote);
        console.log(response.data);
      });
    }
  }


});
