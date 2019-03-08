// Given two strings, return true if one string is an anagram of another.


function isAnagram(a, b) {
    // Write your code here, and
    // return your final answer.
    var a1 = a.split("").sort().join("").replace(" ", "")
    var b1 = b.split("").sort().join("").replace(" ", "")
    if (a1 === b1) {
        return true
    } else {
        return false;
    }
}
