const Stack = require("./Stack");

test("should push a new node onto the top of the stack", () => {
  const stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(15);

  // Stack is LIFO: last in = top
  expect(stack.top.value).toBe(15);
  expect(stack.top.next.value).toBe(10);
  expect(stack.top.next.next.value).toBe(5);
  expect(stack.top.next.next.next).toBeNull();
});

test("should pop the top node from the stack", () => {
  const stack = new Stack();
  stack.push(5);
  stack.push(10);
  stack.push(15);

  // Pop removes the last pushed element
  const popped = stack.pop();
  expect(popped).toBe(15);

  // Now top should be 10
  expect(stack.top.value).toBe(10);
  expect(stack.top.next.value).toBe(5);
  expect(stack.top.next.next).toBeNull();
});

test("should return true when the stack is empty", () => {
  const stack = new Stack();

  expect(stack.isEmpty()).toBe(true);

  stack.push(5);
  expect(stack.isEmpty()).toBe(false);

  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});
