/** Our goal is to find the next largest (if exist) not the largest among all, right?
 *  when can u make something greater?? suppose you've two ele: [a, b] when you can make them
 *  greater when a < b only, if b > a then alread it is greatest form, you can't make greater than this, can you ? no.
 *  suppose you've [a, b, c, d] if curve is increasing from backword, can you make any greatest rearrangement? no, because they're already in their greatest from
 * 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const n = nums.length
    // Find the first element who's lesser than all it right
    let index = -1
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i
            break;
        }
    }

    // if no one in the array, that's means we've greatest arrangement of all time
    if (index === -1) {
        nums.reverse()
        return
    }

    // Swap with the just greater than the lowest
    for (let i = n - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            break;
        }
    }

    // Now reverse the array from index to get the lowest 
    let left = index + 1
    let right = n - 1
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return
};