function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`)
}

greet('Hi', 'Bill');
greet('Hi', undefined);
greet();

function sum() {
  console.log(arguments);
  var sum = 0;
  Array.prototype.forEach.call(arguments, function(value) {
    sum += value;
  })
  console.log(sum);
}

function sum(...values) {
  console.log(values);

  let sum = 0;
  values.forEach(function(value) {
    sum += value;
  })
  console.log(sum);
}

function sum(...values) {
  console.log(values);

  let sum = values.reduce(function(sum, value) {
    return sum + value;
  })
  console.log(sum);
}

sum(5, 7, 2, 10);