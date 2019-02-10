/* Only Unique
Given a string, remove any characters that are not unique from the string.

 */

// Solution
//===========================================
function onlyUnique(str) {
  var unique = "";
  for (var i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
    }
  }
  return unique;
}
