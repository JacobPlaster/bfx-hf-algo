/* eslint-env mocha */
'use strict'

const assert = require('assert')
const _isFunction = require('lodash/isObject')
const cancelAllOrders = require('../../../lib/host/events/cancel_all_orders')

// TODO: stub for coverage results
describe('host:events:cancel_all_orders', () => {
  assert.ok(_isFunction(cancelAllOrders))
})
