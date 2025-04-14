function sortZeroOneTwo(nums) {
    if (nums.length <= 1) return nums;

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}
const nums = [1,1,2,0,2,0,1,2,2,0,1,0,1,2,0,0,2,0,1,1,1,1,0,0,1,1,0,0,2,1,1,2,0,1,1,0,1,0,0,2,0,1,2,2]; // l = 0, m = 1, h = 4
sortZeroOneTwo(nums);
console.log(nums);
