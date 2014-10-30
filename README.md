# Bitcoin block streaming parser
Input a stream of blocks in binary format, and outputs a stream of parsed blocks as objects

Supports mainnet and testnet3

```
npm i bitcoin-block-streaming-parser
```
# Example
```
var parser = require('bitcoin-block-streaming-parser')

binaryStream.pipe(parser('testnet3')).pipe(writableStream)
```

License MIT
