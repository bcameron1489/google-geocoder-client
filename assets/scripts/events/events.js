'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('../api/api.js')
const ui = require('../ui/ui.js')

const onGetLocation = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getLocation(data)
    .then(ui.onGetLocationSuccess)
    .catch(ui.onGetLocationFailure)
}

const addHandlers = () => {
  $('#location-form').on('submit', onGetLocation)
}

module.exports = {
  addHandlers,
  onGetLocation
}
