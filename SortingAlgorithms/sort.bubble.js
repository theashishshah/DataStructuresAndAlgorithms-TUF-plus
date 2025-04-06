/** Algorithm:
 *  [4, 23, 1, 9, 32]
 *  key point: swap at each point
 *  for i = 0 to n- 1
 *      for j = 0 to  n - 1 -i
 *          if(arr[j] > arr[j+1])
 *              swap(arr[j], arr[j+1])
 *
 * return arrr
 *  TC: N + N-1 + N-2 + N-3 + ... + 1 = N(N+1)/2 = O(N^2)
 *  SC: O(0)
 *
 * @param {Array} arr
 * @returns {Sorted Array} arr
 */

function bubbleSort(arr) {
    const nums = [...arr];
    if (nums.length <= 1) return nums;

    for (let i = 0; i < nums.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                isSwapped = true;
            }
        }
        // if array is already sorted then don't check again: TC: O(N)
        if (!isSwapped) break;
    }
    return nums;
}

console.log(bubbleSort([2, 1, 41, 5, 0, -1]));
