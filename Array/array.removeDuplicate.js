function removeDuplicates(nums) {
    if (nums.length <= 1) return nums.length;
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] < nums[i] && nums[j] === nums[i - 1]) {
            j++;
            [nums[j], nums[i]] = [nums[i], nums[j]];
        } else if (nums[j] < nums[i]) {
            j++;
        }
    }
    console.log(nums);
    let len = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            len++;
        }
    }
    return len + 1;

    // if (nums.length <= 1) return nums
    // const temp = []
    // let uniqueEle = nums[0]
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === uniqueEle) {
    //         continue
    //     } else {
    //         temp.push(uniqueEle)
    //         uniqueEle = nums[i]
    //     }
    // }
    // temp.push(uniqueEle)
    // for(let i = 0; i < temp.length; i++){
    //     nums[i] = temp[i]
    // }
    // for(let i = temp.length; i < nums.length; i++){
    //     nums.pop()
    // }
    // return nums.length
}
const nums = [0, 0, 3, 3, 5, 6];
removeDuplicates(nums);
