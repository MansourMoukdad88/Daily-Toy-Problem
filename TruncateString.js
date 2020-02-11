/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
// Solution 
function truncateString(str, num) {
  return num >= str.length ? str : "" + str.slice(0, num) + "..."
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
