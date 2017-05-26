/**
 * Require with cache
 * @function cachedRequire
 * @param {string} name - Name of module to require
 * @returns {*} Required
 */
'use strict'

/** @lends cachedRequire */
function cachedRequire (name) {
  if (/^\./.test(name)) {
    throw new Error(
      `[pon-cache] Requiring relative path is not supported. try ${'`'}cachedRequire(require.resolve("${name}")${'`'}`
    )
  }
  let id = require.resolve(name)
  let cached = cachedRequire.cache[ id ]
  if (cached) {
    return cached
  }
  let required = require(id)
  cachedRequire.cache[ id ] = required
  return required
}

cachedRequire.cache = {}

module.exports = cachedRequire
