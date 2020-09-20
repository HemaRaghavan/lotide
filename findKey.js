const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};
const findKey = function(obj,callback) {
  let allKeys =  Object.keys(obj);
  for (let newKey of allKeys) {
    if (callback(obj[newKey])) {
      return newKey;
    }
  }
  return undefined;

};
//test
const newObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(newObject, x => x.stars === 2), 'noma');
assertEqual(findKey(newObject, x => x.stars === 3), 'Akaleri');
assertEqual(findKey(newObject, x => x.stars === 1), 'Blue Hill');
assertEqual(findKey(newObject, x => x.stars === 0), undefined);