class Solution {
    threeSum(nums) {
        const n = nums.length
        // Take a set DS to store the triplet as string
        // TC: O(n^3) to run three for loops
        // SC: O(n) to store the unique triplets in set DS
        const set = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let temp = [nums[i], nums[j], nums[k]]
                        temp.sort((a, b) => a - b)
                        set.add(temp.join(","))
                    }
                }
            }
        }
        return Array.from(set).map((str) => str.split(",").map((num) => parseInt(num)))
    }
}

// Can we slightly improve our TC: from n^3 -> n^2???
/** we know that a + b + c = 0 -> a = -(b + c)
 *  so we need to find b + c, third element can we stored somewhere
 * 
 */
class Solution {
    threeSum(nums) {
        const n = nums.length
        const ansSet = new Set()
        for (let i = 0; i < n; i++) {
            const hash = new Set()
            for (let j = i + 1; j < n; j++) {
                const temp = -(nums[i] + nums[j])
                if (hash.has(temp)) {
                    const triplet = [temp, nums[i], nums[j]]
                    triplet.sort((a, b) => a - b)
                    ansSet.add(triplet.join())
                }
                hash.add(nums[j])
            }
        }
        // ["1,2,3", "3,5,3", "5,3,4"]
        return Array.from(ansSet).map(str => str.split(",").map(num => parseInt(num)))

    }
}