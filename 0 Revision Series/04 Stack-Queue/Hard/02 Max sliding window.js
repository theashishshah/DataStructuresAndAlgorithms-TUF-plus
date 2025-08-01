class Solution {
    maxSlidingWindow(nums, k) {
        const n = nums.length
        const ans = []
        for (let i = 0; i < n - k + 1; i++) {
            let max = nums[i]
            for (let j = i + 1; j < k + i; j++) {
                max = Math.max(max, nums[j])
            }
            ans.push(max)
        }
        return ans
    }
}

class Solution {
    maxSlidingWindow(nums, k) {
        const n = nums.length
        const ans = []
        const dq = []
        for (let i = 0; i < n; i++) {
            // Maintain the current window
            if (dq.length > 0 && dq[0] <= (i - k)) {
                dq.shift()
            }

            // maintain the monotonicity(decreasing order)
            while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
                dq.pop()
            }

            // push into queue
            dq.push(i)

            // take the largerst of the current window
            if (i >= (k - 1)) {
                ans.push(nums[dq[0]])
            }
        }
        return ans
    }
}
