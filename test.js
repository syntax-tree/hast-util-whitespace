import assert from 'node:assert/strict'
import test from 'node:test'
import {whitespace} from './index.js'

test('whitespace', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'whitespace'
    ])
  })

  await t.test('should return `false` without text', async function () {
    assert.equal(whitespace({type: 'comment', value: 'asd'}), false)
  })

  await t.test('should return `false` for other whitespace', async function () {
    assert.equal(whitespace({type: 'text', value: '\v'}), false)
  })

  await t.test(
    'should return `true` for inter-element whitespace',
    async function () {
      assert.equal(whitespace({type: 'text', value: ' \t\r\n\f'}), true)
    }
  )

  await t.test(
    'should return `false` for a `string` of text',
    async function () {
      assert.equal(whitespace(' \v'), false)
    }
  )

  await t.test(
    'should return `true` for a `string` of inter-element whitespace',
    async function () {
      assert.equal(whitespace(' \t\r\n\f'), true)
    }
  )
})
