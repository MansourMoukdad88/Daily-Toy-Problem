/*Is Subset Of
Make an array method that can return whether or not a context array is a 
subset of an input array. To simplify the problem, you can assume that both
 arrays will contain only strings.*/

 // solution

 Array.prototype.isSubsetOf = function(array) {
  function arrayContains(array, item) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return true;
      }
    }
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (!arrayContains(array, this[i])) {
      return false;
    }
  }
  return true;
}
