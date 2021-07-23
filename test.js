import test from 'tape'
import {whitespace} from './index.js'

test('whitespace', (t) => {
  // @ts-expect-error: runtime.
  t.equal(whitespace(), false, 'should return `false` without node')

  t.equal(
    whitespace({type: 'element', tagName: 'div'}),
    false,
    'should return `false` without text'
  )

  t.equal(
    whitespace({type: 'text', value: '\v'}),
    false,
    'should return `false` for other white-space'
  )

  t.equal(
    whitespace({type: 'text', value: ' \t\r\n\f'}),
    true,
    'should return `true` for inter-element white-space'
  )

  t.equal(
    whitespace({type: 'text'}),
    true,
    'should return `true` for `text` without value'
  )

  t.equal(
    whitespace(' \v'),
    false,
    'should return `false` for a `string` of text'
  )

  t.equal(
    whitespace(' \t\r\n\f'),
    true,
    'should return `true` for a `string` of inter-element white-space'
  )

  t.end()
})
