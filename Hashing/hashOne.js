const arr = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 2, 2]
/** I need to find max element then Create hashtable max + 1 size
 *  max = 5
 *  hashtable[max + 1]
 */

const max = 5
const hashTable = new Array(max + 1).fill(0)
// compute hash table
for(let i = 0; i < arr.length; i++){
    hashTable[arr[i]]++
    // console.log(hashTable[arr[i]]++)
}

// now I got the hash table, take queries now
console.log(hashTable[0])
console.log(hashTable[1])