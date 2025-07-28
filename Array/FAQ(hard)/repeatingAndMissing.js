class Solution {
    findMissingRepeatingNumbers(nums) {
        const n = nums.length
        let twiceEle = -1
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            let flag = false
            for (let j = i + 1; j < n; j++) {
                if (curr === nums[j]) {
                    twiceEle = curr
                    flag = true
                    break
                }
            }
            if (flag) break
        }
        // now find which one is missing
        let missing = -1
        for (let i = 1; i <= n; i++) {
            let flag = false
            for (let j = 0; j < n; j++) {
                // if anyone is equal to i,  then this element exist
                if (i === nums[j]) flag = true
            }
            if (!flag) {
                missing = i
                break;
            }
        }
        return [twiceEle, missing]
    }
}