class QueueStack {
    constructor() {
        this.q = []
    }

    push(x) {
        const n = this.q.length
        this.q.push(x)
        // move the elements
        for (let i = 0; i < n; i++) {
            this.q.push(this.q.shift())
        }
    }

    pop() {
        return this.q.shift()
    }

    top() {
        return this.q[0]
    }

    isEmpty() {
        return this.q.length === 0
    }
}