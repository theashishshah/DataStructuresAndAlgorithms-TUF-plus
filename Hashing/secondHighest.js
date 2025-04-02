function secondMostFrequentElement(nums) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    console.log(map)

    let maxFreq = -1
    let secondMaxFreq = -1
    let maxKey = -1
    let secondMaxKey = -1
    map.forEach((freq, key) =>{
        if(freq > maxFreq) { // 1 > 2
            secondMaxFreq = maxFreq // -1
            secondMaxKey = maxKey
            maxFreq = freq // 2
            maxKey = key
        }else if( freq < maxFreq && freq > secondMaxFreq){ // 1 < 2
            secondMaxFreq = freq
            secondMaxKey = key
        }else if(freq === secondMaxFreq){
            if(key < secondMaxKey){
                secondMaxKey = key
            }
        }
    })
   
    
   
    return secondMaxKey
}

const nums = [8,2,6,8,7,6,2,9,3,6,6]
console.log(secondMostFrequentElement(nums))