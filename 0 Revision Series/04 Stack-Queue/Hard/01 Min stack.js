class MinStack {
    constructor() {
        this.stack = []
    }

    push(val) {
        this.stack.push(val)
    }

    pop() {
        this.stack.pop()
    }

    top() {
        let len = this.stack.length
        return this.stack[len - 1]
    }

    getMin() {
        let min = Infinity
        for (let curr of this.stack) {
            min = Math.min(min, curr)
        }
        return min
    }
}