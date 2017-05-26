/**
 * Test case for cachedRequire.
 * Runs with mocha.
 */
'use strict'

const cachedRequire = require('../lib/cached_require.js')
const { strictEqual } = require('assert')
const co = require('co')

describe('cached-require', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Cached require', () => co(function * () {
    strictEqual(
      cachedRequire('co'),
      cachedRequire('co')
    )
  }))
})

/* global describe, before, after, it */
