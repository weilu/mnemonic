var mnemonic = require('../')
var assert = require("assert")

describe('Word list', function(){
  it('contains 1626 words', function(){
    assert.equal(1626, mnemonic.words.length);
  })
})
