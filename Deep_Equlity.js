/* Deep Equality
Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.

 */
var deepEquals = function(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  if (!Array.isArray(a) && Array.isArray(b)) {
    return false;
  }
  if (Array.isArray(a) && !Array.isArray(b)) {
    return false;
  }
  var output = true;
  for (key in a) {
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      output = deepEquals(a[key], b[key]);
    } else {
      output = a[key] === b[key];
    }
  }
  return output;
};
