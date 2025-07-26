const sum = arr.reduce((pre, curr) => pre + curr, 0)
const target = Math.floor(sum / 2)
// let's space optimize it.
let dp = Array(target + 1).fill(false)
dp[0] = true

for (let index = n - 1; index >= 0; index--) {
    const curr = Array(target + 1).fill(false)
    curr[0] = true
    for (let rem = target; rem > 0; rem--) {
        const include = rem >= arr[index] ? dp[rem - arr[index]] : false
        const exclude = dp[rem]
        curr[rem] = include || exclude
    }
    dp = curr
}

let count = 0
for (let i = target; i >= 0; i--) {
    if (dp[i]) {
        // calculate s2 first because s1 is 'i'
        const s2 = sum - i
        if (Math.abs(i - s2) === diff) count++
        
    }
}
return count


