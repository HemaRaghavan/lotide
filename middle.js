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

} ;

const middle = function (arr) {
  let i = 0;
  let result = [];
  if(arr.length == 1 || arr.length == 2 || arr.length == 0){
    return [];
  } else {
    if (arr.length % 2 == 1){
      i = (arr.length - 1)/2;
      result.push(arr[i]);
      return result;

    } else if (arr.length % 2 == 0){
      i = arr.length / 2;
      result.push(arr[i - 1], arr[i]);
      return result;
    }
  }

};

// TEST CODE
assertArraysEqual((middle([])),[]);
assertArraysEqual((middle([1])),[]);
assertArraysEqual((middle([1, 2])),[]);
assertArraysEqual((middle([1, 2, 3])),[2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])),[3]);
assertArraysEqual((middle([1, 2, 3, 4])),[2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])),[3, 4]);
