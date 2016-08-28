'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', '. Welcome to ', ''], ['Hello ', '. Welcome to ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log(('Hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log('\n    To: ' + to + ',\n    From: ' + from + ',\n    Subject: ' + subject + ',\n    Message: ' + message + '\n  ');
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)));
}

add('5', '7');

var name = 'Bill';
var city = 'Saransk';
console.log(upperName(_templateObject, name, city));

function upperName(literals, value, value2) {
  console.log(literals, value, value2);
  return literals[0] + value.toUpperCase();
}