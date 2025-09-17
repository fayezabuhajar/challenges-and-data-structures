const Node = require('./NodeClass');

class Queue {
    constructor() {
        this.front = null;  
        this.rear = null; 
        this.size = 0; 
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        const removedNode = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return removedNode.value;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }
    isEmpty() {
        return this.size === 0;
    }
    
}

module.exports = Queue;