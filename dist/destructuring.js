'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var js = 'JS';
var php = 'PHP';
var py = 'Python';
var rb = 'Ruby';

console.log(js, php, py, rb);

var scores = [3, 4, 5, undefined, [6, 7], 8, 9];
var low = scores[0];
var high = scores[2];
var _scores$ = scores[3];
var higher = _scores$ === undefined ? 17 : _scores$;

var _scores$2 = _slicedToArray(scores[4], 1);

var highest = _scores$2[0];
var rest = scores.slice(5);

console.log(low, high, higher, highest, rest);

var computeScore = function computeScore(_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var low = _ref2[0];
  var mid = _ref2[1];
  return console.log(low, mid);
};

computeScore([3, 4]);

var yes = 'Yes',
    no = 'No';
var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log(yes, no);

var person = {
  firstName: 'John',
  lastName: 'Smith',
  social: {
    facebook: 'johnsmith',
    twitter: 'jsmith'
  }
};
var firstName = person.firstName;
var lastName = person.lastName;
var _person$age = person.age;
var age = _person$age === undefined ? 25 : _person$age;
var facebook = person.social.facebook;
var _firstName$lastName = { firstName: 'Mike', lastName: 'Jones' };
var first = _firstName$lastName.firstName;
var last = _firstName$lastName.lastName;

console.log(firstName, lastName);
console.log(first, last, age, facebook);