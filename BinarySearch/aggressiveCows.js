function aggressiveCows(nums, cows) {
    let start = Math.min(...nums)
    let end = Math.max(...nums)
    nums.sort((a, b) => a - b)
    let ans = null
    while(start <= end){
        const distance = Math.floor(start + (end - start) / 2)
        if(isPossibleToPlaceCows(nums, cows, distance)){
            ans = distance
            start = distance + 1
        }else{
            end = distance - 1
        }
    }
    return ans
}

function isPossibleToPlaceCows(nums, cows, atDistance){
    cows--
    let lastPlacedCow = nums[0]
    for(let i = 1; i < nums.length; i++){
        // check both if you can place && you have to cows, else what's point to checking if all cows are placed
        if(nums[i] - lastPlacedCow >= atDistance && cows > 0){
            cows--
            lastPlacedCow = nums[i]
        }

        if(cows <= 0) break;
    }
    // If all cows are placed then I can say at this distance I can place
    if(cows <= 0) return true
    else return  false
}

console.log(aggressiveCows([52,965,113,947,238,619,956,464,185,542,279,998,160,585,431,765,436,986,499,615,477,334,937,740,379,52], 15))
















// class Solution {
//     #isPossibleToPlaceCows(nums, cows, atDistance) {
//         cows--;
//         let lastPlacedCow = nums[0];
//         for (let i = 1; i < nums.length; i++) {
//             // check both if you can place && you have to cows, else what's point to checking if all cows are placed
//             if (nums[i] - lastPlacedCow >= atDistance && cows > 0) {
//                 cows--;
//                 lastPlacedCow = nums[i];
//             }

//             if (cows <= 0) break;
//         }
//         // If all cows are placed then I can say at this distance I can place
//         if (cows <= 0) return true;
//         else return false;
//     }
//     aggressiveCows(nums, cows) {
//         const max = Math.max(...nums);
//         const min = Math.min(...nums);
//         nums.sort((a, b) => a - b);
//         let i = 1;
//         for (i = 1; i <= max - min; i++) {
//             // I've to check if at this distance if I can place or not
//             // if yes, then this might be my answer but I'll another one as well
//             if (this.#isPossibleToPlaceCows(nums, cows, i)) continue;
//             else return i - 1;
//         }
//         return i - 1;
//     }
// }
