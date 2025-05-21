class Stack {
    // push, pop, top, size, isEmpty
    constructor(length) {
        this.stack = new Array(length);
        this.size = 0;
        this.top = -1;
        this.length = length;
    }

    push(value = 0) {
        if (this.size < this.length) {
            this.stack[++this.top] = value;
            this.size++;
        } else throw new Error('Stack overflow manually.');
    }

    pop() {
        if (this.isEmpty()) throw new Error('Stack underflow');
        this.size--;
        return this.stack[this.top--];
    }

    isEmpty() {
        return this.top === -1 ? true : false;
    }

    peek() {
        if (this.isEmpty()) throw new Error('Stack underflow');
        return this.stack[this.top];
    }

    stackLength() {
        return this.size;
    }
}

const stack = new Stack(10);
stack.push(10);
stack.push(110);
stack.push(140);
stack.push(12);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.stackLength());
console.log(stack.peek());
console.log("What's inside stack: ", stack.stack.slice(0, stack.stackLength()));
