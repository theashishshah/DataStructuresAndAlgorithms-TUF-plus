class Solution {
    longestSubarray(nums, k) {
        if (nums.length === 1 && nums[0] === k) {
            return 1
        }
        let maxLen = 0
        let sum = 0
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            sum += nums[i]
            if(sum === k){
                maxLen = i + 1
            }
            if(map.has(sum - k)){
                maxLen = Math.max(i - map.get(sum - k), maxLen)
            }
            if(map.has(sum)){
                continue
            }
            map.set(sum, i)
        }
        return maxLen
    }
}

/** TLE code
 * if(nums.length === 1 && nums[0] === k) {
        return 1
       }

       let longestSubArrayLength = 0
       for(let i = 0; i < nums.length; i++){
            let sum = 0
            for(let j = i; j < nums.length; j++){
                sum += nums[j]
                if(sum === k){
                    longestSubArrayLength = Math.max(longestSubArrayLength, j - i + 1)
                }
            }
       }
       return longestSubArrayLength
 * 
 */


/** TLE: Time limit exceeded code
 * TC: O(N^3)
 *  #findSum(start, end, nums) {
        let sum = 0
        for (let i = start; i <= end; i++) {
            sum += nums[i]
        }
        return sum
    }

    longestSubarray(nums, k) {
        if (nums.length === 1 && nums[0] === k) {
            return 1
        }
        let longestSubArrayLength = 0
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                const sum = this.#findSum(i, j, nums)
                if (sum === k) {
                    const tempLen = j - i + 1
                    longestSubArrayLength = Math.max(tempLen, longestSubArrayLength)
                }
            }
        }
        return longestSubArrayLength
    }
 */