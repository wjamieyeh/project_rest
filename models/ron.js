const mongoose = require('mongoose');

const Ron = mongoose.model('Ron', {
  quote: {
    type: String,
    required: true
  }
});

module.exports = Ron;
