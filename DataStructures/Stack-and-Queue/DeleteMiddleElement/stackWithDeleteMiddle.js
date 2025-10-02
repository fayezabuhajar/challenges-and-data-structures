const Stack = require('../stack-and-queue-Implementation/Stack.js');

class StackWithDeleteMiddle extends Stack {
    
    size() {
    let count = 0;
    let current = this.top;
    while (current) {
        count++;
        current = current.next;
    }
    return count;
    }
    
    printStack() {
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        return (elements);
    }


    deleteMiddle() {
    if (this.isEmpty()) return null; // Stack is empty

    const sz = this.size();

    if (sz === 1) return this.pop(); // Only one element

    // Middle index: if even, take n/2 - 1, if odd, take Math.floor(n/2)
    const midIndex = sz % 2 === 0 ? sz / 2 - 1 : Math.floor(sz / 2);

    const tempStack = new Stack();

    // Pop elements until we reach the middle
    for (let i = 0; i < midIndex; i++) {
        tempStack.push(this.pop());
    }

    // Remove the middle element
    this.pop();

    // Push back the elements from the temporary stack
    while (!tempStack.isEmpty()) {
        this.push(tempStack.pop());
    }

    return this;
}
}

module.exports = StackWithDeleteMiddle;