import assert from 'node:assert/strict'
import test from 'node:test'
import {whitespace} from './index.js'
import * as mod from './index.js'

test('whitespace', () => {
  const api = Object.keys(mod)
  assert.ok(api.includes('whitespace'), 'should expose `whitespace`')
  assert.equal(api.length, 1, 'should expose the public api')

  // @ts-expect-error: runtime.
  assert.equal(whitespace(), false, 'should return `false` without node')

  assert.equal(
    whitespace({type: 'element', tagName: 'div'}),
    false,
    'should return `false` without text'
  )

  assert.equal(
    whitespace({type: 'text', value: '\v'}),
    false,
    'should return `false` for other white-space'
  )

  assert.equal(
    whitespace({type: 'text', value: ' \t\r\n\f'}),
    true,
    'should return `true` for inter-element white-space'
  )

  assert.equal(
    whitespace({type: 'text'}),
    true,
    'should return `true` for `text` without value'
  )

  assert.equal(
    whitespace(' \v'),
    false,
    'should return `false` for a `string` of text'
  )

  assert.equal(
    whitespace(' \t\r\n\f'),
    true,
    'should return `true` for a `string` of inter-element white-space'
  )
})
