/** Dutch national flag algorithm: 
 *  imagine a pool of 0, 1 and 2's 
 * [0.......0, 1......1, 1, 2, 0, 2, 1, 0, 2, 2......2]
 * 0 => 0 to low - 1  
 * 1 => low to mid - 1
 * unsorted values mid to high
 * 2 => high + 1 to n - 1 
 *  now low, mid == 0, because array is not sorted yet,
 *  and your high == n - 1, because after that assume array is sorted whos 2, then do the rest work, you know after that                     
 * 
 */

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(nums) {
        // your code here
        let low = 0
        let mid = 0
        let high = nums.length - 1
        while (mid <= high) {
            if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]]
                low++
                mid++
            } else if (nums[mid] === 1) mid++
            else {
                // swap with high but don't do anything to mid, high--
                [nums[mid], nums[high]] = [nums[high], nums[mid]]
                high--
            }
        }
    }
}