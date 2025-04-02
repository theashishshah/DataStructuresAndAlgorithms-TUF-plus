const  nums = [1, 2, 2, 3, 3, 3];
// const max = Math.max(...arr)

// const hashTable = new Array(max + 1).fill(0)

// for(let i = 0; i < arr.length; i++){
//     hashTable[arr[i]] = hashTable[arr[i]] + 1
// }

// for(let i = 0; i < hashTable.length; i++){
//     console.log(i, " appeares ", hashTable[i], " times.")
// }
// let rel = -Infinity
// console.log(rel < 0)

function mostFrequentElement(nums) {
    // using array as hashtable
    const max = Math.max(...nums);

    const hashTable = new Array(max + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = hashTable[nums[i]] + 1;
    }

    let result = -Infinity;
    let occurance = -1;
    for (let i = 0; i < hashTable.length; i++) {
        if (hashTable[i] > occurance) {
            result = i;
            occurance = hashTable[i];
        } else if (hashTable[i] === occurance) {
            if (result > i) {
                result = i;
            }
        }
    }
    return result;
}

console.log(mostFrequentElement(nums))