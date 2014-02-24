'use strict';
var words = require('./wordlist.json')
// list of words from http://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Contemporary_poetry

var n = words.length
function decode(wlist) {
  var result = ''
  for(var i=0; i<Math.floor(wlist.length/3); i++){
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

// always returns a non-negative number
function mod(a, b) {
  return (a % b + b) % b
}

module.exports = {
  words: words,
  decode: decode
}
