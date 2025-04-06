/** How algorithm works:
 *  Algorithm: i = 2
 *  for i = 0 to n -1
 *      let j = i
 *      while(j > 0 && num[j - 1] > num[j]){
 *     swap(nu[j], num[j - 1])
 *    j--
 * }
 *  TC: 0 + 1 + 2 + ... + N-1 = O(N^2)    
 *  SC: O(1)
 */

function insertionSort(arr){
    const nums = [...arr]
    if(nums.length <= 0) return nums
    for(let i = 0; i < nums.length; i++){
        let j = i
        // inserting the newest element at its correct postion
        while(j > 0 && nums[j - 1] > nums[j]){
            [nums[j-1], nums[j]] = [nums[j], nums[j - 1]]
            j--;
        }
    }
    return nums
}
console.log(insertionSort([3, 1, 5, 2, 0]))