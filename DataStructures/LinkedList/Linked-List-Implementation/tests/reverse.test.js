const LinkedList = require("../linkedList");



test("should reverse the linked list", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.add(15);
  list.reverse();
  expect(list.head.value).toBe(15);
  expect(list.head.next.value).toBe(10);
  expect(list.head.next.next.value).toBe(5);
  expect(list.head.next.next.next).toBeNull();
});

test("should remain unchanged", () => {
  const list = new LinkedList();
  list.add(5);
  list.reverse();
  expect(list.head.value).toBe(5);
  expect(list.head.next).toBeNull();
});

test("should handle empty list", () => {
  const list = new LinkedList();
  list.reverse();
  expect(list.head).toBeNull();
});

test("should reverse list with duplicate values", () => {
  const list = new LinkedList();
  list.add(5);
  list.add(10);
  list.add(10);
  list.add(15);
  list.reverse();
  expect(list.head.value).toBe(15);
  expect(list.head.next.value).toBe(10);
  expect(list.head.next.next.value).toBe(10);
  expect(list.head.next.next.next.value).toBe(5);
  expect(list.head.next.next.next.next).toBeNull();
});
