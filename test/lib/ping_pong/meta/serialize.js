/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const serialize = require('../../../../lib/ping_pong/meta/serialize')

// TODO: stub for coverage results
describe('ping_pong:meta:serialize', () => {
  assert.ok(_isFunction(serialize))
})
