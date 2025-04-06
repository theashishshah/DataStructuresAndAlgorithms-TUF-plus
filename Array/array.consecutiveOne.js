function findMaxConsecutiveOnes(nums) {
    if(nums.length === 1) {
        return nums[0] === 1 ? 1: 0
    }

    let maxCount = 0
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++
        }else if(count > maxCount){
            maxCount = count
            count = 0
        }
    }
    return maxCount
}

console.log(findMaxConsecutiveOnes([0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1]));
