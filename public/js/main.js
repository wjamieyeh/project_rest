$(function () {

  const $displayQuote = $('#external');
  const $yes = $('#yes');
  const $no = $('#no');
  const $start = $('#start');
  let isReal;
  // let yesClicked = false;
  // let noClicked = false;
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
    // yesClicked = false;
    // noClicked = false;
    $yes.unbind();
    $no.unbind();
    startQuote();
    $(this).text("Next Quote");
  });


  //if yes button is clicked for either REAL or FAKE quote
  // $yes.click(function() {
    // yesClicked = true;
    // noClicked = false;
    // startQuote();
  // });

  //if no button is clicked for either REAL or FAKE quote
  // $no.click(function() {
    // noClicked = true;
    // yesClicked = false;
  //   startQuote();
  // });


  const startQuote = function () {

    if (isEven()) {
      isReal = true;
      console.log("real quote");
      axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => {
          let quote = response.data
          $('#external').text(`"${quote}"`);
        });

        //if yes button is clicked for either REAL or FAKE quote
        $yes.click(function() {
            $('#gif').css("z-index", "0");
            score = score + 100;
            console.log(score);
        });

        $no.click(function() {
            $('#gifNo').css("z-index", "0");
            live--;
            console.log(live);
        });

    } else {
      isReal = false;
      console.log("fake quote");
      axios.get('/rons/nextquote')
      .then(response => {
          let quote = JSON.stringify(response.data.quote);
          $('#external').text(quote);
      });

      $yes.click(function() {
        $('#gifNo').css("z-index", "0");
        live--;
        console.log(live);
      });

      $no.click(function() {
        $('#gif').css("z-index", "0");
        score = score + 100;
        console.log(score);
      });

    }
  }

  //if number is even, pull from external API, else pull from my collection rons
  // const startQuote = function () {
  //
  //   if (isEven()) {
  //     isReal = true;
  //     console.log("real quote");
  //     axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  //       .then(response => {
  //         let quote = response.data
  //         $('#external').text(`"${quote}"`);
  //         console.log(yesClicked);
  //         console.log(noClicked);
  //           if (yesClicked) {
  //             // $('#gif').css("z-index", "0");
  //             // $('#gif').toggleClass('show-hide-z');
  //             score = score + 100;
  //             yesClicked = false;
  //             console.log(score);
  //           } else if (noClicked){
  //             // $('#gifNo').css("z-index", "0");
  //             live--;
  //             noClicked = false;
  //             console.log(live);
  //           }
  //       });
  //   } else {
  //     isReal = false;
  //     console.log("fake quote");
  //     axios.get('/rons/nextquote')
  //     .then(response => {
  //         let quote = JSON.stringify(response.data.quote);
  //         $('#external').text(quote);
  //           if (noClicked) {
  //             // $('#gif').css("z-index", "0");
  //             score = score + 100;
  //             noClicked = false;
  //             console.log(score);
  //           } else if (yesClicked){
  //             // $('#gifNo').css("z-index", "0");
  //             live--;
  //             yesClicked = false;
  //             console.log(live);
  //           }
  //     });
  //   }
  // }

});
