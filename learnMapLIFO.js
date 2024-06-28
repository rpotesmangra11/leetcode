// Using MAP
var isValid = function(s) {
    let stack = [];
    let map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
  
    console.log(`Processing string: ${s}`);
    for (let char of s) {
      console.log(`Checking character: ${char}`);
      if (['(', '{', '['].includes(char)) {
        stack.push(char);
        console.log(`Pushed ${char} to stack, stack now: [${stack.join(', ')}]`);
      } else {
        if (stack.length === 0) {
          console.log("Stack is empty when a closing bracket appears first, returning false");
          return false; // Stack is empty when a closing bracket appears first
        }
        let last = stack.pop();
        console.log(`Popped from stack: ${last}, stack now: [${stack.join(', ')}]`);
        if (map[char] !== last) {
          console.log(`The last opening bracket doesn't match the current closing bracket, returning false`);
          return false; // The last opening bracket doesn't match the current closing bracket
        }
      }
    }
  
    console.log(`Stack after processing all characters: [${stack.join(', ')}]`);
    return stack.length === 0; // Stack should be empty if all brackets are correctly closed
  };
  
  console.log(isValid("{()}")); // true
  
  let array = [1, 2, 3, 4, 5];
  
  console.log(array.includes(2)); // true
  console.log(array.includes(6)); // false