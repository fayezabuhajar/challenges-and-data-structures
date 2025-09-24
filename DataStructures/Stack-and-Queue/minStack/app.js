const MinStack = require('./MinStack');

const minStack = new MinStack();

minStack.push(15);
minStack.push(7);
minStack.push(12);
minStack.push(3);

console.log("Stack after pushing 15, 7, 12, 3:");
minStack.printStack();  // [3, 12, 7, 15]

let min = minStack.getMin();
console.log(`The minimum number in the stack is: ${min}`); // 3

let popped = minStack.pop();
console.log(`The popped element is: ${popped}`); // 3

console.log("Stack after popping the top element:");
minStack.printStack();  // [12, 7, 15]

min = minStack.getMin();
console.log(`The new minimum number in the stack is: ${min}`); // 7

let peeked = minStack.top();
console.log(`The top element is: ${peeked}`); // 7

minStack.push(2);
console.log("Stack after pushing 2:");
minStack.printStack();  // [2, 12, 7, 15]

min = minStack.getMin();
console.log(`The new minimum number in the stack is: ${min}`); // 2

let isEmpty = minStack.isEmpty();
console.log(`Is the stack empty? ${isEmpty}`); // false
