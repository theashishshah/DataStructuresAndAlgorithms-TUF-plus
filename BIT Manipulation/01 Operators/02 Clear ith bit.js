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