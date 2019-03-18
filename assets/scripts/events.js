'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const config = require('./config.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const onGetBooks = function () {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
}

module.exports = {
  onGetBooks
}
