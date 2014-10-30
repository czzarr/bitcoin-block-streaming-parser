var inherits = require('inherits')
var protocol = require('bcoin-protocol')
var Transform = require('readable-stream').Transform

function BlockStream (network) {
  if (!(this instanceof BlockStream))
    return new BlockStream(network)

  Transform.call(this)
  this._writableState.objectMode = false
  this._readableState.objectMode = true

  network = network || 'mainnet'
  this.parser = protocol.parser(network)
}

inherits(BlockStream, Transform)

BlockStream.prototype._transform = function (chunk, enc, done) {
  this.push(this.parser.parseBlock(chunk))
  done()
}

module.exports = function (network) {
  return new BlockStream(network)
}
