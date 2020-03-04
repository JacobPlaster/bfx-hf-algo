/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const serialize = require('../../../../lib/twap/meta/serialize')

// TODO: stub for coverage results
describe('twap:util:serialize', () => {
  assert.ok(_isFunction(serialize))
})
