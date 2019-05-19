// Count Down
function countDown(num) {
  if( num <=0 ) {
    console.log("All Done");
    return;
  }
  console.log(num);
  // num--
  countDown(num-1)
}

// Sum Range
function sumRange(num) {
  if(num === 1) return 1;
  console.log(num);
  return num + sumRange(num-1);
}

// Factorial
function factorial(num) {
  if(num <= 1) return 1;
  return num * factorial(num -1)
}
console.log(factorial(4));

// Pure Recursion
function oddNums(arr) {
  var newArr = [];
  if(arr.length === 0){
    return newArr;
  }
  if(arr[0] %2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(oddNums(arr.splice(1)))
  return newArr
}
console.log(oddNums([1,2,3,4,5]))
