const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(arr) {
  return arr.slice(1);
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

// Test Case 1: Check the returned array elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([1]));
console.log(tail([]));