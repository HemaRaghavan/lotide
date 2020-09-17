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
const without = function(source,itemsToRemove){
  let newArray = [];  
  for(let i = 0; i < source.length; i++){
    let flag = 0;
    for(let j = 0; j < itemsToRemove.length; j++){
      
      if(source[i] === itemsToRemove[j]){
         flag = 1;        
      }
    }
    if(flag == 0){
      newArray.push(source[i]);
    }    
  }
  return newArray;
}
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]); 
assertArraysEqual(without([1, 2, 3], ["1", "2"]),[1, 2, 3]);

//Test to make sure that the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);