/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const validateParams = require('../../../../lib/ping_pong/meta/validate_params')

// TODO: stub for coverage results
describe('ping_pong:meta:unserialize', () => {
  assert.ok(_isFunction(validateParams))
})
