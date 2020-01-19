

function isPangram(sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowerCased = sentence.toLowerCase()
  for(let char of alphabet) {
    if(lowerCased.indexOf(char) === -1) {
      return false
    }
  }
  return true
}