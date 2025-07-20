class Solution {
    climbStairs(n) {
        if (n === 1) return 1;
        if (n === 0) return 1;

        return this.climbStairs(n - 1) + this.climbStairs(n - 2)
    }
}