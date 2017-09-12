/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const {getBraveExtUrl} = require('../lib/appUrlUtil')
const iconPath = getBraveExtUrl('img/newtab/defaultTopSitesIcon')

module.exports.pinnedTopSites = [
  {
    'key': 'https://twitter.com/ember_coin/|0',
    'count': 0,
    'favicon': `${iconPath}/twitter.png`,
    'location': 'https://twitter.com/ember_coin/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'Ember Coin EMB (@ember_coin) | Twitter'
  }
]

module.exports.topSites = [
  {
    'key': 'https://twitter.com/ember_coin/|0',
    'count': 0,
    'favicon': `${iconPath}/twitter.png`,
    'location': 'https://twitter.com/ember_coin/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'Ember Coin EMB (@ember_coin) | Twitter'
  },
  {
    'key': 'https://www.facebook.com/EmberCoin/|0',
    'count': 0,
    'favicon': `${iconPath}/facebook.png`,
    'location': 'https://www.facebook.com/EmberCoin/',
    'themeColor': 'rgb(59, 89, 152)',
    'title': 'Ember Coin | Facebook'
  },
  {
    'key': 'https://www.youtube.com/playlist?list=PLhRHIJlQowlhcP6HioUU-w7SGeK4iTNoP|0',
    'count': 0,
    'favicon': `${iconPath}/youtube.png`,
    'location': 'https://www.youtube.com/playlist?list=PLhRHIJlQowlhcP6HioUU-w7SGeK4iTNoP',
    'themeColor': '#E62117',
    'title': 'Ember Coin - YouTube Channel'
  },
  {
    'key': 'https://www.embercoin.io/|0',
    'count': 0,
    'favicon': 'http://www.iconj.com/ico/h/2/h28ljfo2ws.ico/|0',
    'location': 'https://www.embercoin.io/',
    'themeColor': 'rgb(255, 255, 255)',
    'title': 'Ember Coin | Ember Browser'
  },
  {
    'key': 'https://itunes.apple.com/app/brave-web-browser/id1052879175?mt=8|0',
    'count': 0,
    'favicon': `${iconPath}/appstore.png`,
    'location': 'https://itunes.apple.com/app/brave-web-browser/id1052879175?mt=8',
    'themeColor': 'rgba(255, 255, 255, 1)',
    'title': 'Ember Browser: The Crypto Browser'
  },
  {
    'key': 'https://play.google.com/store/apps/details?id=com.brave.browser|0',
    'count': 0,
    'favicon': `${iconPath}/playstore.png`,
    'location': 'https://play.google.com/store/apps/details?id=com.brave.browser',
    'themeColor': 'rgb(241, 241, 241)',
    'title': 'Ember Browser: The Crypto Browser on Google Play'
  }
]
