// function add(a,b) {
//   return a + b;
// }
//
// console.log(add(3,4));
//
// var toAdd = [9,5];
//
// // add(toAdd[0], toAdd[1])
//
// // spreads out as indidual arguments
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// // spreads out to add results into the array
// var final = [4, ...groupA, ...groupB];
//
// console.log(final)

var person = ['People', 25];
var personTwo = ['Jen', 29];

// hi person you are age

function helloAge(name, age) {
  console.log('Hello ' + name + ' You are ' + age);
}

helloAge(...person);
helloAge(...personTwo);

var names = ['bob', 'mike', 'ben'];
var final = ['Peter', ...names];

var printNames = function(names) {
  names.forEach((name) => {
    console.log(name);
  });
};

printNames(final);