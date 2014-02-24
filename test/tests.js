var mnemonic = require('../')
var assert = require("assert")

describe('Word list', function(){
  it('contains 1626 words', function(){
    assert.equal(1626, mnemonic.words.length);
  })
})

describe('#decode', function(){
  it('returns empty string when there are less than 3 words', function(){
    var wlist = [ "like", "like" ]
    assert.equal('', mnemonic.decode(wlist))
  })

  it('works for first word repeated 3 times', function(){
    var wlist = [ "like", "like", "like" ]
    assert.equal('00000000', mnemonic.decode(wlist))
  })

  it('works for last word repeated 3 times', function(){
    var wlist = [ "weary", "weary", "weary" ]
    assert.equal('00000659', mnemonic.decode(wlist))
  })

  it('works for the largest combo', function(){
    var wlist = [ "fail", "husband","howl" ]
    assert.equal('ffffffff', mnemonic.decode(wlist))
  })

  it('works for last 12 words', function(){
    var wlist = [
      "spiral", "squeeze", "strain", "sunset", "suspend", "sympathy",
      "thigh", "throne", "total", "unseen", "weapon", "weary"
    ]
    assert.equal('0028644c0028644f0028645200286455', mnemonic.decode(wlist))
  })
})

describe('#encode', function(){
  it('returns empty passphrase when input is less than 8 characters', function(){
    assert.deepEqual([], mnemonic.encode("0000000"))
  })

  it('works for first word repeated 3 times', function(){
    var wlist = [ "like", "like", "like" ]
    assert.deepEqual(wlist, mnemonic.encode('00000000'))
  })

  it('works for last word repeated 3 times', function(){
    var wlist = [ "weary", "weary", "weary" ]
    assert.deepEqual(wlist, mnemonic.encode('00000659'))
  })

  it('works for the largest combo', function(){
    var wlist = [ "fail", "husband","howl" ]
    assert.deepEqual(wlist, mnemonic.encode('ffffffff'))
  })

  it('works for last 12 words', function(){
    var wlist = [
      "spiral", "squeeze", "strain", "sunset", "suspend", "sympathy",
      "thigh", "throne", "total", "unseen", "weapon", "weary"
    ]
    assert.deepEqual(wlist, mnemonic.encode('0028644c0028644f0028645200286455'))
  })
})
