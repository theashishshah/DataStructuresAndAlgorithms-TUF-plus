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



var MinStack = function () {
    this.stack = [] // [[value, min], [value, min]]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length === 0) {
        this.stack.push([val, val])
        return
    }

    let min = Math.min(this.getMin(), val)
    this.stack.push([val, min])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let len = this.stack.length
    return this.stack[len - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    let len = this.stack.length
    return this.stack[len - 1][1]
};