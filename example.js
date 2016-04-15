// Dependencies:
var whitespace = require('./index.js');

// Checks:
var a = whitespace({
    'type': 'element',
    'tagName': 'div',
    'children': []
});

var b = whitespace({
    'type': 'text',
    'value': '\t  \n'
});

var c = whitespace({
    'type': 'text',
    'value': '  text\f'
});

// Yields:
console.log('txt', ['a: ' + a, 'b: ' + b, 'c: ' + c].join('\n'));
