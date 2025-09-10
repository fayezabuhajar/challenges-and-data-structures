const LinkedList = require('./linkedList');
const MergeSortedLists = require('./MergeSorted/mergeSorted');
const RotateLinkedList = require('./RotateLinkedList/rotateLinkedList');


const list1 = new LinkedList();
// const list2 = new LinkedList();

list1.add(5);
list1.add(10);
list1.add(20);
list1.add(30);
// list1.display();
// list1.reverse();
// list1.display();
// list1.remove(10);
// list1.display(); 
// console.log(list1.includes(20)); 
// console.log(list1.includes(10)); 

// list1.insertAt(15, 2);
// console.log("List 1:");
// list1.display(); 

// list2.add(3);
// list2.add(8);
// list2.add(9);
// list2.add(20);
// console.log("List 2:");
// list2.display();

// const mergedHead = MergeSortedLists.merge(list1, list2);
// console.log("Merged List:");
// MergeSortedLists.display(mergedHead);

console.log("Print List 1:");
list1.display();

const rotateList = new RotateLinkedList(list1);
rotateList.rotateLeft(2);
console.log("Rotated List 1 by 2:");
list1.display();



