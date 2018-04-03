'use strict'

// const store = require('../store')
// const config = require('../config')
// const events = require('../events')

// default url get request for geocode
const getLocation = function (data) {
  const address = document.getElementById('location-input').value
  return $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    method: 'GET',
    data: {
      address: address,
      key: 'AIzaSyCzauNLDqkkvy1eA69LP2olsDJB0ht42GI'
    }
  })
}

module.exports = {
  getLocation
}
