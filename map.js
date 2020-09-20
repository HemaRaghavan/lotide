const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(arr1,arr2){
  
  if (eqArrays(arr1,arr2)){
    console.log("✔️✔️✔️ Assertion Passed:" , arr1 , "===" , arr2);

  } else {
    console.log("❌ ❌ Assertion Failed:" , arr1 , "!==" , arr2);
  }

};

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};
// test
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]),['g','c','t','m','t']);



const persons = [
  {name : 'John' , age : 40 } ,
  {name : 'Tom' , age :15 },
  {name: 'Alice' , age:30 }
]
assertArraysEqual(map(persons, person => person.name), ['John', 'Tom', 'Alice']);
assertArraysEqual(map(persons, person => person.name + ' is ' + person.age + ' years old.'),['John is 40 years old.','Tom is 15 years old.','Alice is 30 years old.']);

const numberArray = [2,4,6,8,10];
assertArraysEqual(map(numberArray, num => num/2),[1,2,3,4,5]);