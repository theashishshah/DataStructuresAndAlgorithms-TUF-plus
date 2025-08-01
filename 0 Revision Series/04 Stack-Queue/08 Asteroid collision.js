/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (nums) {
    const n = nums.length
    const stack = []
    for (let curr of nums) {
        if (curr > 0) stack.push(curr)
        else {
            curr = Math.abs(curr)
            let len = stack.length
            while (len > 0 && stack[len - 1] > 0 && stack[len - 1] < curr) {
                stack.pop()
                len--
            }
            if (len > 0 && stack[len - 1] > 0 && stack[len - 1] === curr) {
                stack.pop()
                len--
            } else if (len > 0 && stack[len - 1] > 0 && stack[len - 1] > curr) continue
            else stack.push(-curr)
        }
    }

    return stack
};