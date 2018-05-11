$(function () {

  const $displayQuote = $('#external');
  const $yes = $('#yes');
  const $no = $('#no');
  const $start = $('#start');
  let isReal;
  var yesClicked = false;
  var noClicked = false;
  var score = 0;
  var live = 3;


  //check if number is even: true, false
  const isEven = () => {
    let randomNum =  Math.floor(Math.random() * 20);
    if (randomNum % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  //start button to start the same, and get next quote on click
  $start.click(function() {
    $('#gif').css("z-index", "-1");
    $('#gifNo').css("z-index", "-1");
    startQuote();
    $(this).text("Next Quote");
    yesClicked = false;
    noClicked = false;
  });

  //if yes button is clicked for either REAL or FAKE quote
  $yes.click(function() {
    yesClicked = true;
    noClicked = false;
    startQuote();
  });

  //if no button is clicked for either REAL or FAKE quote
  $no.click(function() {
    noClicked = true;
    yesClicked = false;
    startQuote();
  });


  //if number is even, pull from external API, else pull from my collection rons
  const startQuote = function () {

    if (isEven()) {
      isReal = true;
      console.log(isReal);
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => {
          let quote = response.data
          $('#external').text(`"${quote}"`);
            if (yesClicked) {
              $('#gif').css("z-index", "0");
              // $('#gif').toggleClass('show-hide-z');
              score = score + 100;
            } else if (noClicked){
              $('#gifNo').css("z-index", "0");
              live--;
            }
        });
    } else {
      isReal = false;
      console.log(isReal);
      axios.get('/rons/nextquote')
      .then(response => {
          let quote = JSON.stringify(response.data.quote);
          $('#external').text(quote);
            if (noClicked) {
              score = score + 100;
              $('#gif').css("z-index", "0");
              // console.log(score);
            } else if (yesClicked){
              $('#gifNo').css("z-index", "0");
              live--;
              // console.log(live);
            }
      });
    }
  }

});
