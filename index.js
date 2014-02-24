'use strict';
var words = require('./wordlist.json')
// list of words from http://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Contemporary_poetry

var n = words.length
function decode(wlist) {
  var result = ''
  for(var i=0; i<div(wlist.length, 3); i++){
    var word1 = wlist[3*i]
    var word2 = wlist[3*i + 1]
    var word3 = wlist[3*i + 2]

    var w1 = words.indexOf(word1)
    var w2 = mod(words.indexOf(word2), n)
    var w3 = mod(words.indexOf(word3), n)

    var number = w1 + mod(w2-w1, n) * n + mod(w3-w2, n) * n * n
    var hex = number.toString(16)
    while(hex.length < 8){ hex = '0' + hex }
    result += hex
  }

  return result
}

function encode(message) {
  var result = []
  for(var i=0; i<div(message.length, 8); i++){
    var word = message.substr(8*i, 8)
    var hex = parseInt(word, 16)

    var w1 = mod(hex, n)
    var w2 = mod(div(hex, n) + w1, n)
    var w3 = mod(div(div(hex, n), n) + w2, n)

    result.push(words[w1], words[w2], words[w3])
  }

  return result
}

// always returns a non-negative number
function mod(a, b) {
  return (a % b + b) % b
}

function div(a, b) {
  return Math.floor(a/b)
}

module.exports = {
  words: words,
  decode: decode,
  encode: encode
}
