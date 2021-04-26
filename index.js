export function whitespace(node) {
  var value =
    node && typeof node === 'object' && node.type === 'text'
      ? node.value || ''
      : node

  // HTML whitespace expression.
  // See <https://html.spec.whatwg.org/#space-character>.
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === ''
}
