'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['Javascript', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['C#', 'Python'], dynamicLanguages);

console.log(languages);

function add(x, y, z) {
  console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);