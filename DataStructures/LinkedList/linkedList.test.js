const LinkedList = require("./linkedList");

test("should add an element to the linked list", () => {
  const list = new LinkedList();
  list.add(5);
  expect(list.head.value).toBe(5);
});

test("should add multiple elements to the linked list", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.add(20);
  expect(list.head.value).toBe(5);
  expect(list.head.next.value).toBe(10);
  expect(list.head.next.next.value).toBe(20);
});

test("should remove an element from the linked list", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.remove(10);
  expect(list.head.value).toBe(5);
  expect(list.head.next).toBeNull();
});

test("should check if an element exists in the linked list", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  expect(list.includes(10)).toBe(true);
  expect(list.includes(20)).toBe(false);
});

test("should insert an element at a given index", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.insertAt(7, 1);
  expect(list.head.next.value).toBe(7);
});
