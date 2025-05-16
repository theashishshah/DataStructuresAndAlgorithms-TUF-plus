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


function longestOnes (nums, k) {
    // TC: O(N + N) SC: O(1)
    if (!nums) return 0;
    let maxLength = 0;
    let currentZeros = 0;
    let left = 0;
    let right = 0;
    while (right < nums.length) {
      if (nums[right] === 0) currentZeros++;
      if (currentZeros > k) {
        if (nums[left] === 0) currentZeros--;
        left++;
        right++;
      } else {
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      }
    }
    return maxLength;
};