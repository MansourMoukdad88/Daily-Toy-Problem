/*Non-repeated Character
Given an arbitrary input string, return the first non-repeating character.
 For strings with all repeats, return 'sorry'.*/

 function firstNonRepeatedCharacter (string) {
   var storage = {};
  for(var i = 0; i < string.length; i++) {
   if (storage[string[i]]) {
    storage[string[i]] +=1;
    } else {
      storage[string[i]] =1;
      }
  }
 for(var j = 0; j < string.length; j++) {
    if(storage[string[j]] === 1) {
     return string[j];
    }
   }
  return 'sorry';
}