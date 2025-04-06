/** algorithm
 *   [7, 4, 1, 5, 3]
 *   step1: select the lowest value, and move it to front(non-decreasing) or back (non-increasing order)
 *   step2: repeat the process until all the elements are sorted
 *
 *   pseudo code:
 *   swap in-place
 *   nums =  [7, 4, 1, 5, 3]
 *   for i = 0 to n - 1
 *        min = nums[i]
 *         for j = i + 1 to n - 1
 *              if (j < min)
 *              update min
 *              track index of min value
 *          swap(i, j)
 *  TC: N-1 + N-2 + N-3+ N-4 ... + 2 + 1 + 0 = N(N+1)/2 = O(N^2)
 *  SC: O(2)
 */

function selectionSort(nums) {
    if (nums.length <= 1) return nums;
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
    }
    return nums;
}

console.log(selectionSort([1, 2, 8, 3, 12, 41, 0, -1]))
// function selectionSort(nums) {
//     if (nums.length <= 1) return nums;
//     for (let i = 0; i < nums.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if(minIndex !== i){
//             [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
//         }
//     }
//     return nums;
// }

