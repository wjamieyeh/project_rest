$(function () {

  const $displayQuote = $('#external');

  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => {

      $('#external').text(`" ${response.data} "`);
      //console.log(response.data);
    });

  //declare a variable for the random number by using math.random
  const randomNum = Math.floor(Math.random() * 20);

  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };




  //console.log(randomNum);
    //if number is odd, pull from database
    //create a click event on the Yes and No element


});
