const StackWithDeleteMiddle = require("./stackWithDeleteMiddle");

test("should delete the middle element in the stack with odd number of elements", () => {
  const stack = new StackWithDeleteMiddle();
  stack.push(15);
  stack.push(7);
  stack.push(12);
  stack.push(3);
  stack.push(9); // Stack: top -> 9 -> 3 -> 12 -> 7 -> 15

  stack.deleteMiddle(); // يحذف 12
  expect(stack.printStack()).toEqual([9, 3, 7, 15]);
});

test("should delete the middle element in the stack with even number of elements", () => {
  const stack = new StackWithDeleteMiddle();
  stack.push(15);
  stack.push(7);
  stack.push(12);
  stack.push(3); // Stack: top -> 3 -> 12 -> 7 -> 15

  stack.deleteMiddle(); // يحذف 12
  expect(stack.printStack()).toEqual([3, 7, 15]);
});

test("delete from an empty stack", () => {
  const stack = new StackWithDeleteMiddle();
  stack.deleteMiddle(); // Stack فارغ
  expect(stack.printStack()).toEqual([]);
});

test("delete from a stack with one element", () => {
  const stack = new StackWithDeleteMiddle();
  stack.push(15);
  stack.deleteMiddle(); // Stack يصبح فارغ
  expect(stack.printStack()).toEqual([]);
});

