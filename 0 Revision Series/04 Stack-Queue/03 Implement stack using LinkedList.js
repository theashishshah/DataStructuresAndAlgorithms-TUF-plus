class Node {
    constructor(data = 0) {
        this.data = data
        this.link = null
    }
}

class LinkedListStack {
    constructor() {
        this.head = null
        this.size = 0
    }
    push(x) {
        // I need to create a new now and add to the existing linkedlist
        const node = new Node(x)
        node.link = this.head
        this.head = node
        this.size++
    }

    pop() {
        if (this.size <= 0) return -1
        const temp = this.head
        this.head = this.head.link
        temp.link = null
        this.size--
        return temp.data
    }

    top() {
        if (this.size <= 0) return -1
        return this.head.data
    }

    isEmpty() {
        return this.size === 0
    }
}