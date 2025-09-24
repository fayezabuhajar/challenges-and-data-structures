class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    }
    
    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value); 
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null; 
        }
        const poppedValue = this.stack.pop();         
        if (poppedValue === this.getMin()) {
            this.minStack.pop();
        }
        return poppedValue;
    }
    top() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.stack[this.stack.length - 1];
    }   
    getMin() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.minStack[this.minStack.length - 1]; 
    }
    isEmpty() {
        return this.stack.length === 0; 
    }
    
    printStack() {
    console.log(this.stack);
  }
}

module.exports = MinStack;