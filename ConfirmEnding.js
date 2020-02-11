// #Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).


confirmEnding("Bastian", "n") //should return true.
confirmEnding("Congratulation", "on") // should return true.
confirmEnding("Connor", "n") // should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") // should return false.
confirmEnding("He has to give me a new name", "name") // should return true.
confirmEnding("Open sesame", "same") // should return true.

// Solution: 
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}