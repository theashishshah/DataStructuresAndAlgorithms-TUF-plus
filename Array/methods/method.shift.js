const nums = [2,4, 5, 2, 34]

function myShift(nums){
    
    const ele = nums[0]
    const rel = []
    for(let i = 0; i < nums.length - 1; i++){
        rel[i] = nums[i + 1]
    }
    nums = rel
    console.log(rel)
    console.log(nums)
    return ele
    
}
