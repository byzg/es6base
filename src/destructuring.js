let [js, php, py, rb] = ['JS', 'PHP', 'Python', 'Ruby'];
console.log(js, php, py, rb);

let scores = [3, 4, 5, undefined, [6, 7], 8, 9];
let [low, , high, higher = 17, [highest], ...rest] = scores;
console.log(low, high, higher, highest, rest);

let computeScore = ([low, mid])=>
  console.log(low, mid);

computeScore([3, 4]);

let yes = 'Yes',
    no = 'No';
[yes, no] = [no, yes];
console.log(yes, no);

let person = {
  firstName: 'John',
  lastName: 'Smith',
  social: {
    facebook: 'johnsmith',
    twitter: 'jsmith'
  }
};
let {firstName, lastName, age = 25, social: {facebook}} = person;
let {firstName: first, lastName: last} = {firstName: 'Mike', lastName: 'Jones'};
console.log(firstName, lastName);
console.log(first, last, age, facebook);