class Solution {
    fact(n) {
        if (n === 0 || n === 1) return 1
        return n * this.fact(n - 1)
    }
    nCr(n, r) {
        if (r > n) return 0
        return Math.round(this.fact(n) / (this.fact(r) * this.fact(n - r)))
    }
    pascalTriangleI(r, c) {
        return this.nCr(r - 1, c - 1)
    }
}
