class Solution {
    findSubsetHelper(index, target, arr, n) {
        if (target < 0) return false
        if (target === 0) return true
        if (index >= n) return false

        if (this.findSubsetHelper(index + 1, target - arr[index], arr, n)) return true
        else if (this.findSubsetHelper(index + 1, target, arr, n)) return true
        return false
    }
    isSubsetSum(arr, target) {
        const n = arr.length
        return this.findSubsetHelper(0, target, arr, n)

    }
}