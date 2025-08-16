function clearIthBith(n, k) {
    return n & ~ ( 1 << k)
}


function toggleIthBit(n, k) {
    return n ^ (1 << k)
}

class Solution {
    toggleBits(n, l, r) { // toggle a bits in range
        // code here
        for (let i = l; i <= r; i++) {
            n = n ^ (1 << i - 1)
        }
        return n
    }
}

function removeLastSetBit(num) {
    return num & (num - 1)
}


function countNumberOfSetBits(num) {
    if (num === 0) return 0
    if(num === 1) return 1
    let count = 0
    while (num > 1) {
        if (num % 2 !== 0) count++
        num = Math.floor(num / 2)
    }
    if (num === 1) count++
    return count
}
function countNumberOfSetBitss(num) {
    if (num === 0) return 0
    if(num === 1) return 1
    let count = 0
    // while (num > 1) {
    //     count += num & 1
    //     num = Math.floor(num >> 1)
    // }
    // if (num === 1) count++
    // return count

    while (num > 0) {
        num = num & (num - 1)
        count++
    }
    return count
}
console.log(countNumberOfSetBitss(13))