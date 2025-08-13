/**
 * @param {number[]} prices
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
    minMaxCandy(prices, k) {
        // code here
        if (prices.length === 1) return [prices[0], prices[0]]
        const n = prices.length
        let min = 0
        // TC: O(nlog(n)) + O(n) + O(n) = O(nlog(n))
        // SC: O(1)
        prices.sort((a, b) => a - b)
        let left = 0
        let right = n
        while (left < right) {
            min += prices[left++]
            for (let i = 0; i < k; i++) right--
        }

        let max = 0
        left = -1
        right = n - 1
        while (left < right) {
            max += prices[right--]
            for (let i = 0; i < k; i++) left++
        }

        return [min, max]
    }
}
