function lowerBound(nums, target) {
    // simplest form 
    let start = 0
    let end = nums.length - 1
    let ans = nums.length
    while(start <= end){
        const mid = Math.floor(start + (end - start) / 2)
        if(nums[mid] >= target){
            ans = mid
            end = mid - 1
        }else{
            start = mid + 1
        }
    }

    return ans
}