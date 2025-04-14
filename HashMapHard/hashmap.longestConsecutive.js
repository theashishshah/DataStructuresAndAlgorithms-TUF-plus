function longestConsecutive(nums) {
    const len = nums.length;
    if (len <= 1) return 1;

    nums.sort((a, b) => a - b);
    console.log(nums)
    let count = 1;
    let maxCount = -Infinity;
    for (let i = 1; i < len; i++) {
        if (nums[i] - 1 === nums[i - 1] || nums[i] === nums[i - 1]) {
            if(nums[i] === nums[i - 1]){
                continue
            }
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        } else {
            count = 0;
            count++;
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }
    return maxCount;
}

const arr = [
    17, 12, -8, -11, 14, -19, 9, -4, -11, -12, -8, 5, 15, 14, 9, -19, 12, 5, 0,
    18, 13, -1, 3, 19, 16, -13, -11, 9,
];

console.log( new Set(arr))
// console.log(longestConsecutive(arr));
