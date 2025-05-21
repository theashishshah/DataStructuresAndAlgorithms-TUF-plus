class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
           
        }
         this.size++;
    }

    pop() {
        if (this.size <= 0) throw new Error('Queue underflow.');
        const temp = this.front
        this.front = this.front.next
        this.size--
        return temp.data
    }

    peek(){
        if (this.size <= 0) throw new Error('Queue underflow.');
        return this.front.data
    }

    isEmpty(){
        return  this.size === 0
    }
}

const q = new Queue();
q.push(12);
q.push(112);
q.push(1);
q.push(32);
console.log(q.pop())
console.log("Peek", q.peek())
console.log(q);
