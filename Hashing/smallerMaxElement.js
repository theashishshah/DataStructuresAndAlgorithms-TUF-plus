function mostFrequentElement(nums) {
    let maxCount = 0;
    let element = -1;
    const visitedArray = new Array(10000).fill(0);
    // console.log(visitedArray)
    // const arr = [6,7,7,10,1,10,8];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        if (visitedArray[nums[i]] === 0) {
            visitedArray[nums[i]] = 1;
            for (let j = 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    count++;
                }
            }
            if (maxCount < count) {
                maxCount = count;
                element = nums[i];
            }

            if (maxCount === count && element > nums[i]) {
                element = nums[i];
            }
        }
    }
    return element;
}

// const arr = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 2, 2];
const arr = [6, 7, 7, 10, 1, 10, 8];
console.log(mostFrequentElement(arr));
