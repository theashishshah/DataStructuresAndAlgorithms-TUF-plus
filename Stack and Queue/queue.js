class Queue {
    constructor(length) {
        this.queue = new Array(length);
        this.front = 0;
        this.rear = 0;
        this.capacity = length;
        this.size = 0;
    }

    push(value) {
        if (this.size >= this.capacity) throw new Error('Queue overflow.');
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
    }

    pop(){
        if(this.size <= 0) throw new Error("Queue underflow.")
        const value = this.queue[this.front]
        this.front = (this.front + 1) % this.capacity
        this.size--
        return value
    }

    peek(){
        if(this.size <= 0) throw new Error("Queue underflow")
        return this.queue[this.front]
    }

    isEmpty(){
        return this.size === 0
    }

}

const q = new Queue(3);
q.push(19);
q.push(14);
q.push(119);

console.log(q.pop()); // 19
console.log(q.pop()); // 14
console.log(q.pop()); // 119

q.push(32);
q.push(315);
q.push(3281);

console.log("Formatted queue: ", q.queue.slice(0, q.size)); // [32, 315, 3281]
console.log("Peek of the element: ", q.peek());    // 32
