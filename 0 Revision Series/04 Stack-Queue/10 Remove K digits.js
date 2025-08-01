/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (num.length === k) return "0"

    const stack = [] // I need to compare with just prev, so I can think of LIFO
    for (const digit of num) {
        // digit: '3', '4'
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop()
            k--
        }

        stack.push(digit)
    }

    // If there are still some elements to remove i'll remove from backword
    // cuz I know from frontend they are smaller
    while (k > 0 && stack.length > 0) {
        stack.pop()
        k--
    }

    // You may have leading zerors, remove those
    const firstNonZero = stack.findIndex(num => num !== "0")
    const result = stack.slice(firstNonZero).join("")
    return result.length > 0 ? result : "0"
};