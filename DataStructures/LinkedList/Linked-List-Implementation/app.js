const LinkedList = require('./linkedList');
const MergeSortedLists = require('./MergeSorted/mergeSorted');


const list1 = new LinkedList();
const list2 = new LinkedList();

list1.add(5);
list1.add(10);
list1.add(20);
list1.add(30);
// list1.printList();
// list1.reverse();
// list1.printList();
// list1.remove(10);
// list1.printList(); 
// console.log(list1.includes(20)); 
// console.log(list1.includes(10)); 

// list1.insertAt(15, 2);
console.log("List 1:");
list1.printList(); 

list2.add(3);
list2.add(8);
list2.add(9);
list2.add(20);
console.log("List 2:");
list2.printList();

const mergedHead = MergeSortedLists.merge(list1, list2);
console.log("Merged List:");
MergeSortedLists.print(mergedHead);


