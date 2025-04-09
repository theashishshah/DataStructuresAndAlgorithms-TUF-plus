function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(count)
        if (nums[i] === 1) {
            count++;
        } else if (nums[i] === 0 && count > 0) {
            if (count > maxCount) {
                maxCount = count;
            }
            count = 0;
        }
    }
    return maxCount;
}

console.log(
    findMaxConsecutiveOnes([
        0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
    ])
);
