'use strict'

const bookListing = require('./templates/ get - books - template.handlebars')

const store = require('./store')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = bookListing({
    reviews: data.books
  })
  $('#display').html(showBooksHtml)
}
const failure = () => {
  $('#message').text('Error on get books')
}


module.exports = {
  getBookSuccess,
  failure
}
