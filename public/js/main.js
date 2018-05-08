$(function () {

  const $displayQuote = $('#external');

  // axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  //   .then(response => console.log(response.data));


  axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => {

      $('#external').text(`" ${response.data} "`);
      //console.log(response.data);
    });

});
