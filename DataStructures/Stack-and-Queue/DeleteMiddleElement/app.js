const StackWithDeleteMiddle = require('./stackWithDeleteMiddle.js');

const stack = new StackWithDeleteMiddle();
stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log(`Original Stack: ${stack.printStack()}`); // Expected Output: Original Stack: 7,14,3,8,5
stack.printStack();

stack.deleteMiddle();
console.log(`Stack after deleting middle element: ${stack.printStack()}`); // Expected Output: Stack after deleting middle element: 7,14,8,5
stack.printStack();

stack.push(2);
stack.push(9);
stack.push(11);
console.log(`Stack after pushing more elements: ${stack.printStack()}`); // Expected Output: Stack after pushing more elements: 7,14,8,5,2,9,11
stack.printStack();

stack.deleteMiddle();
console.log(`Stack after deleting middle element again: ${stack.printStack()}`); // Expected Output: Stack after deleting middle element again: 7,14,5,2,9,11



