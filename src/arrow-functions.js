let add = (x, y)=> x + y;
let square = x => x * x;
let giveMeAnswer = ()=> 42;
let log = ()=> console.log('logging..');
let multiply = (x, y)=> {
  let result = x * y;
  return result;
};
let getPerson = ()=> ({ name: 'John' });

(()=> console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.reduce((sum, num)=> sum + num));
console.log(numbers.map(num => num * num));

let person = {
  name: 'Bob',
  greet1: function () {
    setTimeout(function() {
      console.log('ES5:');
      console.log(`Hello, my name is ${this.name}`);
      console.log(this);
      console.log('');
    }, 1000)
  },
  greet2: function () {
    setTimeout(()=> {
      console.log('ES6:');
      console.log(`Hello, my name is ${this.name}`);
      console.log(this);
    }, 2000)
  }
};

person.greet1();
person.greet2()