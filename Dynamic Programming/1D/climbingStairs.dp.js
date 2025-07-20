class Solution {
    climbStairs(n) {
        if (n === 1) return 1;
        if (n === 0) return 1;

        return this.climbStairs(n - 1) + this.climbStairs(n - 2)
    }
}


class Solution {
    //  TC: O(N)
    // SC: O(n) + O(n)

    climbStairs(n) {
        const dp = new Array(n + 1).fill(-1)

        function recurse(n) {
            if (n === 0 || n === 1) return 1
            if (dp[n] !== -1) return dp[n]
            dp[n] = recurse(n - 1) + recurse(n - 2)
            return dp[n]
        }

        return recurse(n)
    }
}