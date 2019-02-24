/**
 * Cache utility for pon
 * @module pon-cache
 */

'use strict'


const cachedRequire = require('./cached_require')

exports.cachedRequire = cachedRequire

module.exports = {
  cachedRequire
}
