// Code
// Testcase
// Test Result
// Test Result
// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log(s.length - 1);
  for (let i = 0; i < s.length; i + 2) {
    if (s[i] == "{" && s.charAt(s.length - 1)) {
      return true;
    } else if (
      (s[i] == "(" && s[i + 1] != ")") ||
      (s[i] == "[" && s[i + 1] != "]") ||
      (s[i] == "{" && s[i + 1] != "}")
    ) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isValid("{()}"));

// Optimized Pseudocode:
// Initialize an empty stack.
// Loop through each character of the string.
// If the character is an opening bracket, push its corresponding closing bracket onto the stack.
// If the character is a closing bracket, pop from the stack and check if it matches. If not, return false.
// After the loop, check if the stack is empty. If it is, return true; otherwise, return false.
