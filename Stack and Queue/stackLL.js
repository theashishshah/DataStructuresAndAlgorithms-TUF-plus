class Node {
    constructor(data = 0) {
        this.data = data;
        this.next = null;
    }
}

// because as its dynamic in nature, so there won't be the concept of stack overflow
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.size <= 0) throw new Error('Stack underflow.');
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.size--;
        return temp.data;
    }

    peek() {
        if (this.size <= 0) throw new Error('Stack underflow.');
        const temp = this.top;
        return temp.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

const stack = new Stack();
stack.push(34);
stack.push(134);
stack.push(304);
console.log("Popped element: ",stack.pop())
console.log('peek: ', stack.peek());

console.log(stack);
