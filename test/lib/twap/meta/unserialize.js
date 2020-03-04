/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const unserialize = require('../../../../lib/twap/meta/unserialize')

// TODO: stub for coverage results
describe('twap:util:unserialize', () => {
  assert.ok(_isFunction(unserialize))
})
