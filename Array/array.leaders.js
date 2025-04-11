function leaders(nums) {
    if(nums.length <= 1) return nums
    // [1, 2, 5, 3, 1, 2]
    const leadersArray = []
    for(let i = 0; i < nums.length - 1; i++){
        let flag = false
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] <= nums[j]){
                flag = true
                break;
            }
        }

        if(!flag){
            leadersArray.push(nums[i])
        }
    }
    leadersArray.push(nums[nums.length - 1])
    return leadersArray
}

const nums = [1, 2, 5, 3, 1, 2]
console.log(leaders(nums))