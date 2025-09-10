const LinkedList = require('../linkedList');
const Node = require('../NodeClass');


class RotateLinkedList { 

     constructor(linkedList) {
        this.linkedList = linkedList; // نخزن الإنستانس هنا
    }

    rotateLeft(k) {
        try {
            if (!this.linkedList.head || k === 0) return;

            let current = this.linkedList.head;
            let length = 1;
            while (current.next) {
                current = current.next;
                length++;
            }

            k = ((k % length) + length) % length;
            if (k === 0) return;

            current.next = this.linkedList.head;

            let stepsToNewHead = k;
            let newTail = this.linkedList.head;

            for (let i = 1; i < stepsToNewHead; i++) {
                newTail = newTail.next;
            }

            this.linkedList.head = newTail.next;
            newTail.next = null;

        } catch (error) {
            console.error("Error rotating list:", error.message);
        }
    }
    
}

module.exports = RotateLinkedList;