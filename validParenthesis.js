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

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   console.log(s.length - 1);
//   for (let i = 0; i < s.length; i + 2) {
//     if (s[i] == "{" && s.charAt(s.length - 1)) {
//       return true;
//     } else if (
//       (s[i] == "(" && s[i + 1] != ")") ||
//       (s[i] == "[" && s[i + 1] != "]") ||
//       (s[i] == "{" && s[i + 1] != "}")
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// console.log(isValid("{()}"));

// Optimized Pseudocode:
// Initialize an empty stack.
// Loop through each character of the string.
// If the character is an opening bracket, push its corresponding closing bracket onto the stack.
// If the character is a closing bracket, pop from the stack and check if it matches. If not, return false.
// After the loop, check if the stack is empty. If it is, return true; otherwise, return false.

// To guide you without a full code solution, consider these adjustments:

// Use a Stack: When you encounter an opening bracket (i.e., {, [, or (), push it onto a stack. When you find a closing bracket, check if the stack is empty (which would mean there's no matching opening bracket) or if the top of the stack matches the bracket type. If it matches, pop from the stack; if not, return false.

// Loop Structure: Use a simple for loop to iterate through each character in the string: for (let i = 0; i < s.length; i++).

// Final Check: After the loop, check if the stack is empty. An empty stack after processing the entire string means all brackets were correctly matched; otherwise, some brackets were left unmatched.

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//   let stack = [];
//   if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
//     stack.push(s[i]);
//   } else if (s[i] == "}" || s[i] == ")" || s[i] == "]") {
//     for (const value of stack) {
//       if (
//         value.indexOf("{") != -1 ||
//         value.indexOf("(") != -1 ||
//         value.indexOf("]") != -1
//       ) {
//         stack.splice(1, value.indexOf())
//       }
//     }
//   }
// };


// The parenthesis (or any bracket) balancing problem is a classic example of a LIFO (Last In, First Out) operation, which is effectively demonstrated using a stack. Here’s why this example aligns perfectly with the LIFO concept:

// Last Opened, First Closed: When you are parsing expressions with nested parentheses, the last parenthesis you open is the first one you need to close. For instance, in the expression (a * (b + c)), the parenthesis around b + c is opened last and must be closed first before you can close the parenthesis around a * (b + c).

// Stack Operations: To check for balanced parentheses, you push each opening parenthesis onto a stack as you encounter it. When you find a closing parenthesis, you check the stack:

// If the stack’s top element is a matching opening parenthesis, you pop it off the stack, effectively closing that parenthesis.
// If the top element does not match, or if the stack is empty (indicating no corresponding opening parenthesis), the parentheses are unbalanced.
// Immediate Handling of Last Item: The necessity to handle the most recently encountered opening parenthesis first when a closing parenthesis is encountered is a direct application of the LIFO principle. You always deal with the most recent element (or problem) before going back to earlier elements.

// This pattern of processing—where the last encountered problem must be resolved first before earlier problems can be addressed—is why the parenthesis balancing problem is commonly solved using a stack, making it a straightforward example of LIFO in both concept and execution.

//Using MAP
// var isValid = function(s) {
//   let stack = [];
//   let map = {
//     ')': '(',
//     '}': '{',
//     ']': '['
//   };

//   for (let char of s) {
//     if (['(', '{', '['].includes(char)) {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) return false; // Stack is empty when a closing bracket appears first
//       let last = stack.pop();
//       if (map[char] !== last) return false; // The last opening bracket doesn't match the current closing bracket
//     }
//   }

//   return stack.length === 0; // Stack should be empty if all brackets are correctly closed
// };

// console.log(isValid("{()}")); // true



// let array = [1, 2, 3, 4, 5];

// console.log(array.includes(2)); // true
// console.log(array.includes(6)); // false


// Yes, in JavaScript, it's possible to initialize an array directly in a condition, as seen in the code snippet with ['(', '{', '['].includes(char). This approach is used for convenience and brevity, especially when the array is small and used only once within that specific condition.

//   Here's what happens in that line:
  
//   An array containing the opening brackets ['(', '{', '['] is created on-the-fly within the condition.
//   The .includes() method is called on this array to check if it contains the current character char.
//   If char is found in the array (meaning it's one of the opening brackets), .includes() returns true, and the condition is satisfied.
//   If char is not found (meaning it's not an opening bracket), .includes() returns false, and the condition is not satisfied.
//   This technique is useful for readability and when the temporary array is not needed elsewhere in the code. However, if the same array is used multiple times, it's more efficient to initialize it once and store it in a variable, to avoid creating the same array multiple times.
