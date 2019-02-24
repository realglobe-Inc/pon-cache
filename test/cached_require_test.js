/**
 * Test case for cachedRequire.
 * Runs with mocha.
 */
'use strict'

const cachedRequire = require('../lib/cached_require.js')
const { strictEqual } = require('assert')

describe('cached-require', function () {
  this.timeout(3000)

  it('Cached require', () => {
    strictEqual(
      cachedRequire('co'),
      cachedRequire('co')
    )
  })
})

/* global describe, before, after, it */
