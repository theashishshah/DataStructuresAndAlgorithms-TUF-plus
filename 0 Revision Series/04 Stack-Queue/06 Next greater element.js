class Solution {
    nextLargerElement(arr) {
        const ans = []
        const n = arr.length
        for (let i = 0; i < n; i++) {
            let next = -Infinity
            for (let j = i + 1; j < n; j++) {
                if (arr[i] < arr[j]) {
                    next = arr[j]
                    break
                }
            }
            if (next !== -Infinity) ans.push(next)
            else ans.push(-1)
        }
        return ans
    }
}

class Solution {
    nextLargerElement(arr) {
        const n = arr.length
        const ans = new Array(n).fill(-1)
        const stack = []
        for (let i = n - 1; i >= 0; i--) {
            const curr = arr[i]
            let len = stack.length
            while (len > 0 && stack[len - 1] <= curr) {
                stack.pop()
                len--
            }
            // Now I'm sure if stack is not empty, I've my NGE 
            len = stack.length
            if (len > 0) {
                ans[i] = stack[len - 1]
            }
            stack.push(curr)
        }
        return ans
    }
}