class Solution {
    sumSubarrayMins(nums) {
        const n = nums.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const temp = []
                for (let k = i; k <= j; k++) {
                    temp.push(nums[k])

                }
                sum += Math.min(...temp)
            }
        }
        return sum
    }
}


var sumSubarrayMins = function (nums) {
    const n = nums.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        const curr = []
        for (let j = i; j < n; j++) {
            curr.push(nums[j])
            sum += Math.min(...curr)
            sum = sum % (1e9 + 7)
        }
    }
    return sum % (1e9 + 7)
};

class Solution {
    findNSE(arr) {
        const n = arr.length
        const ans = new Array(n).fill(0)
        const stack = []
        for (let i = n - 1; i >= 0; i--) {
            const curr = arr[i]
            let len = stack.length
            while (len > 0 && arr[stack[len - 1]] >= curr) {
                stack.pop()
                len--
            }
            len = stack.length
            ans[i] = len > 0 ? stack[len - 1] : n
            stack.push(i)
        }
        return ans
    }

    findPSEE(arr) {
        const n = arr.length
        const ans = new Array(n).fill(0)
        const stack = []
        for (let i = 0; i < n; i++) {
            const curr = arr[i]
            let len = stack.length
            while (len > 0 && arr[stack[len - 1]] > curr) {
                stack.pop()
                len--
            }
            len = stack.length
            ans[i] = len > 0 ? stack[len - 1] : -1
            stack.push(i)
        }
        return ans
    }
    sumSubarrayMins(arr) {
        const nseIndices = this.findNSE(arr)
        const pseeIndices = this.findPSEE(arr)
        const n = arr.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            const left = i - pseeIndices[i]
            const right = nseIndices[i] - i
            const freq = left * right
            const value = (arr[i] * freq) % (1e9 + 7)
            sum += value
            sum = sum % (1e9 + 7)
        }
        return sum
    }
}