function search(nums, target) {
    // use binary search algorithm
    let start = 0
    let end = nums.length;
    while(start <= end){
       let mid = Math.floor(start + ((end - start) / 2))
       if(nums[mid] === target){
          return mid
       }else if(nums[mid] > target){
          end = mid - 1
       }else start = mid + 1
    }
    return -1
  }
  