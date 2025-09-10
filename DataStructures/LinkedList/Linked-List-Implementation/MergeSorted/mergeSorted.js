class MergeSortedLists {
  // Merge two sorted linked lists
  static merge(list1, list2) {
    if (!list1 || !list1.head) return list2 ? list2.head : null;
    if (!list2 || !list2.head) return list1 ? list1.head : null;

    let current1 = list1.head;
    let current2 = list2.head;
    let head = null;
    let tail = null;

    if (current1.value <= current2.value) {
      head = current1;
      current1 = current1.next;
    } else {
      head = current2;
      current2 = current2.next;
    }
    tail = head;

    while (current1 !== null && current2 !== null) {
      if (current1.value <= current2.value) {
        tail.next = current1;
        current1 = current1.next;
      } else {
        tail.next = current2;
        current2 = current2.next;
      }
      tail = tail.next;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head;
  }

  // Print list starting from a head node
  static display(head) {
    let current = head;
    let result = 'Head -> ';
    while (current !== null) {
      result += current.value + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
    }
    
}

module.exports = MergeSortedLists;
