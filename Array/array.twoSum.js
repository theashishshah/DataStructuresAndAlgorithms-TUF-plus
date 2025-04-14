function twoSum(nums, target){
    const numsLength = nums.length // 5
    if(numsLength === 2) return [0, 1]

    // create new map data structure to remember 
    const map = new Map()

    for(let i = 0; i < numsLength; i++){
        if(map.has(target -  nums[i])){
            return [map.get(target - nums[i]), i].sort()
        }else{
            map.set(nums[i], i)
        }
    }
}

// console.log(twoSum(  [-6, 7, 1, -7, 6, 2], 3))

// const arr = [[-1 -1 2], [-1 -1 2]]
// console.log(Array.from(new Set([
//   [-900,  278, 622],
//   [-789, -143, 932],
//   [-529,  -93, 622],
//   [-479, -143, 622],
//   [-479, -143, 622]
// ].map(JSON.stringify)), JSON.parse))
console.log(new Set("Ashish"))
console.log([-1, 0, -4].join().at(6))