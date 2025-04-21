function roseGarden(n, nums, k, m) {
    if (n < m * k) return -1
    let bouquet = 0
    const minNum = Math.min(...nums)
    const maxNum = Math.max(...nums)
    for (let i = minNum; i <= maxNum; i++) {
        let count = 0
        for (let j = 0; j < n; j++) {
            if (nums[j] <= i) {
                count++
            } else {
                bouquet += Math.floor(count / k)
                count = 0
            }
        }
        bouquet += Math.floor(count / k)
        if(bouquet >= m){
            return i
        }else{
            bouquet = 0
        }
    }
    return -1
}
console.log(roseGarden(8, [7, 7, 7, 7, 13, 11, 12, 7], 3, 2));
