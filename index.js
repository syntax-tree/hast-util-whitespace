/**
 * @param {unknown} thing
 * @returns {boolean}
 */
export function whitespace(thing) {
  /** @type {string} */
  const value =
    // @ts-expect-error looks like a node.
    thing && typeof thing === 'object' && thing.type === 'text'
      ? // @ts-expect-error looks like a text.
        thing.value || ''
      : thing

  // HTML whitespace expression.
  // See <https://html.spec.whatwg.org/#space-character>.
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === ''
}
