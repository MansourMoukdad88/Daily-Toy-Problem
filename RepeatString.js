/*
Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
repeatStringNumTimes("abc", 3);
