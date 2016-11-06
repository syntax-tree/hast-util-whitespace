# hast-util-whitespace [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check whether a [HAST node][hast] is [**inter-element
whitespace**][spec].

## Installation

[npm][]:

```bash
npm install hast-util-whitespace
```

## Usage

Dependencies:

```javascript
var whitespace = require('hast-util-whitespace');

whitespace({
  type: 'element',
  tagName: 'div',
  children: []
}); //=> false

whitespace({
  type: 'text',
  value: '\t  \n'
}); //=> true

whitespace({
  type: 'text',
  value: '  text\f'
}); //=> false
```

## API

### `whitespace(node|value)`

###### Parameters

*   `node` ([`Node`][node], optional) — Node whose `value` to check.
*   `value` (`string`, optional) — Value to check.

###### Returns

`boolean` — Whether the `value` (of [`node`][text]) is inter-element
white-space: consisting of zero or more of space, tab (`\t`),
line feed (`\n`), carriage return (`\r`), or form feed (`\f`).

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-whitespace.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-whitespace

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-whitespace.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-whitespace?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[spec]: https://html.spec.whatwg.org/#inter-element-whitespace

[node]: https://github.com/wooorm/hast#node

[text]: https://github.com/wooorm/hast#text