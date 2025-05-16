function longestOnes(nums, k) {
    if (!nums.length) return 0;

    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let currentLength = 0;
        let remainingZerosAllowed = k;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 1) {
                currentLength++;
            } else if (nums[j] === 0 && remainingZerosAllowed > 0) {
                currentLength++;
                remainingZerosAllowed--;
            } else break;
        }
        maxLength = Math.max(currentLength, maxLength);
    }
    return maxLength;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]));
