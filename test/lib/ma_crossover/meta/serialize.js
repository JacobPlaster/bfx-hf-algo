/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const serialize = require('../../../../lib/ma_crossover/meta/serialize')

// TODO: stub for coverage results
describe('ma_crossover:meta:serialize', () => {
  assert.ok(_isFunction(serialize))
})
