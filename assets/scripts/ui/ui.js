'use strict'

const address = require('../templates/formatted-address.hbs')
const latitude = require('../templates/latitude.hbs')
const longitude = require('../templates/longitude.hbs')

const clearHtml = function () {
  $('.locations').html('')
  $('.geometry').html('')
  $('.geometry').html('')
}

const onGetLocationSuccess = function (data) {
  clearHtml()
  const showAddress = address({results: data.results[0].formatted_address})
  const showLatitude = latitude({results: data.results[0].geometry.location.lat})
  const showLongitude = longitude({results: data.results[0].geometry.location.lng})
  $('.locations').append(showAddress)
  $('.geometry').append(showLatitude)
  $('.geometry').append(showLongitude)
}

const onGetLocationFailure = function (data) {
  console.log('Failure')
}

module.exports = {
  onGetLocationSuccess,
  onGetLocationFailure
}
