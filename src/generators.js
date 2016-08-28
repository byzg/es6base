function* generate() {
  console.log('Start');
  yield 1;
  console.log('Finish');
}

let iterator = generate();
console.log(iterator.next());
console.log(iterator.next());

function* range(start, end) {
  let current = start;
  while (current <= end) {
    yield current++;
  }
}

for(let num of range(1, 5)) {
  console.log(num);
}

let numbers = {
  *range(start, end) {
    let current = start;
    while (current <= end) {
      yield current++;
    }
  }
}

for (let num of numbers.range(1, 5)) {
  console.log(num);
}

