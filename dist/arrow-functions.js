'use strict';

var add = function add(x, y) {
  return x + y;
};
var square = function square(x) {
  return x * x;
};
var giveMeAnswer = function giveMeAnswer() {
  return 42;
};
var log = function log() {
  return console.log('logging..');
};
var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};
var getPerson = function getPerson() {
  return { name: 'John' };
};

(function () {
  return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.reduce(function (sum, num) {
  return sum + num;
}));
console.log(numbers.map(function (num) {
  return num * num;
}));

var person = {
  name: 'Bob',
  greet1: function greet1() {
    setTimeout(function () {
      console.log('ES5:');
      console.log('Hello, my name is ' + this.name);
      console.log(this);
      console.log('');
    }, 1000);
  },
  greet2: function greet2() {
    var _this = this;

    setTimeout(function () {
      console.log('ES6:');
      console.log('Hello, my name is ' + _this.name);
      console.log(_this);
    }, 2000);
  }
};

person.greet1();
person.greet2();