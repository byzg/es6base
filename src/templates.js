function greet(name) {
  console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to},
    From: ${from},
    Subject: ${subject},
    Message: ${message}
  `);
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}

add('5', '7');

let name = 'Bill';
let city = 'Saransk';
console.log(upperName`Hello ${name}. Welcome to ${city}`);

function upperName(literals, value, value2) {
  console.log(literals, value, value2);
  return literals[0] + value.toUpperCase();
}