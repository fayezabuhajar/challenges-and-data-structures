const Node = require('./NodeClass');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        try {
            const newNode = new Node(value);

            if (!this.head) {
                this.head = newNode;
                return;
            }

            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        } catch (error) {
            console.error("Error adding node:", error.message);
        }
    }

    remove(value) {
        try {
            if (!this.head) return;

            if (this.head.value === value) {
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            while (current.next && current.next.value !== value) {
                current = current.next;
            }

            if (current.next) {
                current.next = current.next.next;
            }
        } catch (error) {
            console.error("Error removing node:", error.message);
        }
    }

    display() {
        try {
            let current = this.head;
            let output = 'Head -> ';
            while (current) {
                output += current.value + ' -> ';
                current = current.next;
            }
            output += 'Null';
            console.log(output);
        } catch (error) {
            console.error("Error printing list:", error.message);
        }
    }

    includes(value) {
        try {
            let current = this.head;
            while (current) {
                if (current.value === value) return true;
                current = current.next;
            }
            return false;
        } catch (error) {
            console.error("Error checking value:", error.message);
            return false;
        }
    }

    insertAt(value, index) {
        try {
            const newNode = new Node(value);

            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
                return;
            }

            let current = this.head;
            let previous = null;
            let i = 0;

            while (current && i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            if (i === index) {
                previous.next = newNode;
                newNode.next = current;
            } else {
                console.log("Index out of bounds");
            }
        } catch (error) {
            console.error("Error inserting node:", error.message);
        }
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

module.exports = LinkedList;
