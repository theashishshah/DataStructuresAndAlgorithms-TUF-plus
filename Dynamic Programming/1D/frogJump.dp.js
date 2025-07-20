class Solution {
    frogJump(heights) {
        // TC: expo 2^n
        // SC: O(n)
        if (heights.length === 1) return 0
        function jump(n) {
            if (n <= 0) return 0
            let oneJump = jump(n - 1) + Math.abs(heights[n] - heights[n - 1])
            if (n > 1) {
                return Math.min(oneJump, jump(n - 2) + Math.abs(heights[n] - heights[n - 2]))
            } else return oneJump
        }

        return jump(heights.length - 1)
    }
}