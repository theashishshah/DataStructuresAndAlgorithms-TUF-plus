function myPush(ele, nums){
   
    let len = nums.length
    const rel = new Array(len + 1).fill(0)
    let i = 0
    for( i = 0; i < nums.length; i++){
        console.log(nums[i])
        rel[i] = nums[i]
    }
   rel[i] = ele
   nums = rel
    return nums.length
}
const nums = [2,4, 5, 2, 34]
console.log(nums)
console.log(myPush(20, nums))