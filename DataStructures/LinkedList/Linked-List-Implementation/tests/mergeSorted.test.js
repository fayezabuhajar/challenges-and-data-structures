const LinkedList = require('../linkedList');
const MergeSortedLists = require('../MergeSorted/mergeSorted');


// Test merging when one list is empty
test("Merge with one empty list", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList(); // empty list

    list1.add(5);
    list1.add(10);
    list1.add(20);

    const mergedHead = MergeSortedLists.merge(list1, list2);

    // Check the merged list values
    expect(mergedHead.value).toBe(5);
    expect(mergedHead.next.value).toBe(10);
    expect(mergedHead.next.next.value).toBe(20);
    expect(mergedHead.next.next.next).toBeNull(); // End of list
});

// Test merging two empty sorted lists
test("Merge two empty lists", () => {
    const list1 = new LinkedList(); // empty list
    const list2 = new LinkedList(); // empty list
    const mergedHead = MergeSortedLists.merge(list1, list2);

    // Check the merged list is null
    expect(mergedHead).toBeNull();
});

// Test merging two non-empty sorted lists
test("Merge two non-empty sorted lists", () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList(); 
    list1.add(2);
    list1.add(3);
    list1.add(5);
    list2.add(10);
    list2.add(15);
    list2.add(20);
    const mergedHead = MergeSortedLists.merge(list1, list2);
// Check the merged list values
    expect(mergedHead.value).toBe(2);
    expect(mergedHead.next.value).toBe(3);
    expect(mergedHead.next.next.value).toBe(5);
    expect(mergedHead.next.next.next.value).toBe(10);
    expect(mergedHead.next.next.next.next.value).toBe(15);
    expect(mergedHead.next.next.next.next.next.value).toBe(20);
    expect(mergedHead.next.next.next.next.next.next).toBeNull(); // End of list
});