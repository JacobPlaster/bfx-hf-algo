/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isFunction')
const generateOrder = require('../../../../lib/ma_crossover/util/generate_order')

// TODO: stub for coverage results
describe('ma_crossover:util:generate_order', () => {
  assert.ok(_isFunction(generateOrder))
})
