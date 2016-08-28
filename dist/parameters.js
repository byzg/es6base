'use strict';

function greet() {
  var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
  var name = arguments.length <= 1 || arguments[1] === undefined ? 'friend' : arguments[1];

  console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi', undefined);
greet();

function sum() {
  console.log(arguments);
  var sum = 0;
  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

function sum() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values);

  var sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

function sum() {
  for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  console.log(values);

  var sum = values.reduce(function (sum, value) {
    return sum + value;
  });
  console.log(sum);
}

sum(5, 7, 2, 10);