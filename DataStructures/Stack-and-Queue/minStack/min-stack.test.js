const MinStack = require("./MinStack");

test("should retrieve the minimum element in the stack", () => {
  const minStack = new MinStack();
  minStack.push(15);
  minStack.push(7);
  minStack.push(12);
  minStack.push(3);

  expect(minStack.getMin()).toBe(3);
});

test("should update minimum after popping elements", () => {
  const minStack = new MinStack();
  minStack.push(15);
  minStack.push(7);
  minStack.push(12);
  minStack.push(3);

  const removed = minStack.pop();
  expect(removed).toBe(3); // popped element should be 3
  expect(minStack.getMin()).toBe(7);
});

test("should update minimum after pushing elements", () => {
  const minStack = new MinStack();
  minStack.push(15);
  minStack.push(7);
  minStack.push(12);

  expect(minStack.getMin()).toBe(7);

  minStack.push(2);
  expect(minStack.getMin()).toBe(2);
});

test("should return the top element without removing it", () => {
  const minStack = new MinStack();
  minStack.push(15);
  minStack.push(7);

  expect(minStack.top()).toBe(7);
  expect(minStack.getMin()).toBe(7); // min remains unchanged
});

test("should return true when the stack is empty", () => {
  const minStack = new MinStack();

  expect(minStack.isEmpty()).toBe(true);

  minStack.push(10);
  expect(minStack.isEmpty()).toBe(false);

  minStack.pop();
  expect(minStack.isEmpty()).toBe(true);
});
