const Node = require('../NodeClass');

class reverse {

    constructor() {
        this.head = null;
    }
    
    reverse()
    {
        try {

            // initialize three pointers: current, prev and next
            let current = this.head;
            let prev = null;
            let next;

            // traverse all the nodes of Linked List
            while (current != null) {
                // store next
                next = current.next;

                // reverse current node's next pointer
                current.next = prev;

                // move pointers one position ahead
                prev = current;
                current = next;
            }

                this.head = prev;

        }
        
        catch (error) {
            console.error("Error reversing list:", error.message);
        }
    }
}

module.exports = reverse;
