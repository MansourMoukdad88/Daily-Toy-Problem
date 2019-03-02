// Given a string, return true if its arrangement of parenthesis(),
// curly - brackets { }, and square - brackets[] would be considered
//  valid in code and mathematics(is balanced).

function isBalanced(string) {
  // return your final answer.
  var map = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  var stack = [];
  for (var i = 0; i < string.length; i++) {
    var item = string[i];
    if (map[item]) {
      stack.push(item);
    } else if (item === "}" || item === "]" || item === ")") {
      if (map[stack.pop()] !== item) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
