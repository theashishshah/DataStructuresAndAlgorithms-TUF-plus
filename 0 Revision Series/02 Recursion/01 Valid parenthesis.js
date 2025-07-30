class Solution {
    backtrack(open, close, str, n, ans) {
        if (open > n || close > n) return
        if (open === n && close === n) {
            ans.push(str)
            return
        }
        this.backtrack(open + 1, close, str + "(", n, ans)
        if (open > close) this.backtrack(open, close + 1, str + ")", n, ans)

    }
    generateParenthesis(n) {
        //your code goes here
        const ans = []
        this.backtrack(0, 0, "", n, ans)
        return ans
    }
}