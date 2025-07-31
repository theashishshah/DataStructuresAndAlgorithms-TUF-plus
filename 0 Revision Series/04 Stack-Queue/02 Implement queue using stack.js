class StackQueue {
    constructor() {
        this.stack = []
    }
    push(x) {
        this.stack.push(x)
    }

    pop() {
        return this.stack.shift()
    }

    peek() {
        return this.stack[0]
    }

    isEmpty() {
        return this.stack.length === 0
    }
}