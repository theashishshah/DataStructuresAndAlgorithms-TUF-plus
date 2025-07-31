
class Node {
    constructor(data = 0) {
        this.data = data
        this.next = null
    }
}
class LinkedListQueue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    push(x) {
        const node = new Node(x)
        // I've to attach into rear, right
        if (!this.front) {
            this.rear = node
            this.front = node
        } else {
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    pop() {
        if (this.size <= 0) return -1
        const temp = this.front
        this.front = this.front.next
        this.size--
        return temp.data
    }

    peek() {
        if (this.size <= 0) return -1
        return this.front.data
    }

    isEmpty() {
        return this.size === 0
    }
}