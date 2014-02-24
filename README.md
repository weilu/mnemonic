mnemonic
========

Implementation of [Electrum's mnemonic](https://raw.github.com/spesmilo/electrum/master/lib/mnemonic.py) in JavaScript

## Usage

`npm install mnemonic`

```javascript
var mnemonic = require('mnemonic')
var wlist = [
  "spiral", "squeeze", "strain", "sunset", "suspend", "sympathy",
  "thigh", "throne", "total", "unseen", "weapon", "weary"
]
mnemonic.decode(wlist) // => '0028644c0028644f0028645200286455'
mnemonic.encode('0028644c0028644f0028645200286455') // => wlist
```

## Credits

- Wordlist and implementation are ported from [Electrum](https://github.com/spesmilo/electrum)
- Some of the test cases are stolen from [mnemonic.js](https://github.com/ggozad/mnemonic.js/blob/master/tests/specs/mnemonic_spec.js)
