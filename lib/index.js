/**
 * Cache utility for pon
 * @module pon-cache
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get cachedRequire () { return d(require('./cached_require')) }
}
