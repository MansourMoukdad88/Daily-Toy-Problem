//Write a function called hasNoDuplicates which accepts an array and returns true if there are
//no duplicate values(more than one element in the array that has the same value as another).
//If there are any duplicates, the function should return false.

function hasNoDuplicates(arr) {
  return arr.every(function(val, i, arr) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
