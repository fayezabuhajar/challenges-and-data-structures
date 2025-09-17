const Queue = require("./Queue");

test("should enqueue nodes to the rear of the queue", () => {
  const queue = new Queue();
  queue.enqueue(5);
  queue.enqueue(10);
  queue.enqueue(15);

  // Front is the first inserted node
  expect(queue.front.value).toBe(5);
  expect(queue.front.next.value).toBe(10);
  expect(queue.front.next.next.value).toBe(15);
  expect(queue.front.next.next.next).toBeNull();

  // Rear is the last inserted node
  expect(queue.rear.value).toBe(15);
});

test("should dequeue nodes from the front of the queue", () => {
  const queue = new Queue();
  queue.enqueue(5);
  queue.enqueue(10);
  queue.enqueue(15);

  const removed = queue.dequeue();
  expect(removed).toBe(5); // first in → first out

  // Now front should be 10
  expect(queue.front.value).toBe(10);
  expect(queue.front.next.value).toBe(15);
  expect(queue.front.next.next).toBeNull();

  // Rear should still be 15
  expect(queue.rear.value).toBe(15);
});


test("should return true when the queue is empty", () => {
  const queue = new Queue();

  // Initially empty
  expect(queue.isEmpty()).toBe(true);

  // After enqueue → not empty
  queue.enqueue(5);
  expect(queue.isEmpty()).toBe(false);

  // After dequeue → empty again
  queue.dequeue();
  expect(queue.isEmpty()).toBe(true);
});
