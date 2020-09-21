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

module.exports = middle;
