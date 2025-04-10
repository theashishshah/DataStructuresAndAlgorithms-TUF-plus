function moveZeroes(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0 && nums[j] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            console.log(nums[i]);
            j++;
        }else if (nums[j] !== 0){
            j++
        }
    }
    console.log(nums);
}

const nums = [8, 0, 2, 5, 0, 6, 8, 0, 4, 0, 0, 2, 2, 3];
moveZeroes(nums);
