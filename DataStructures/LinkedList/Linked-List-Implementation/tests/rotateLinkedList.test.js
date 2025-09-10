const LinkedList = require('../linkedList');
const Node = require('../NodeClass');
const RotateLinkedList = require('../RotateLinkedList/rotateLinkedList');

test("The list should remain unchanged", () => {
  const list = new LinkedList();
    list.add(5);
    list.add(10);
    list.add(15);
    list.add(20); 
    const rotator = new RotateLinkedList(list);
    rotator.rotateLeft(0);
    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(10);
    expect(list.head.next.next.value).toBe(15);
    expect(list.head.next.next.next.value).toBe(20);
    expect(list.head.next.next.next.next).toBeNull();
});

// test rotaing by a value greater than the length of the list
test("rotate list when k = 7, length = 4 → k should be 7 % 4 = 3", () => {
  const list = new LinkedList();
    list.add(5);
    list.add(10);
    list.add(15);
    list.add(20); 
    const rotator = new RotateLinkedList(list);
    rotator.rotateLeft(7);
    expect(list.head.value).toBe(20);
    expect(list.head.next.value).toBe(5);
    expect(list.head.next.next.value).toBe(10);
    expect(list.head.next.next.next.value).toBe(15);
    expect(list.head.next.next.next.next).toBeNull();
});


