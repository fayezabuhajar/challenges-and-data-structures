const Stack = require("./Stack");
const Queue = require("./Queue");

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.peek() 
console.log(stack.isEmpty()); // false
stack.pop(); 
stack.pop();
console.log(stack.isEmpty()); // true



const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());
console.log(queue.peek()); 
console.log(queue.isEmpty());

queue.dequeue(); // Remove 20
queue.dequeue(); // Remove 30
console.log(queue.isEmpty()); // true

