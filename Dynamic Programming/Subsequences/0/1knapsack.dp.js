class Solution {
    getMaxWeight(index, val, wt, bagSize){
        const n = val.length
        if(index === n - 1){
            if(bagSize >= wt[index]) return val[index]
            else return 0
        }
        let include = 0
        if(bagSize >= wt[index]){
            include += val[index] + this.getMaxWeight(index + 1, val, wt, bagSize - wt[index])
        }
        let exclude = this.getMaxWeight(index + 1, val, wt, bagSize)

        return Math.max(include, exclude)
    }
    knapsack01(wt, val, n, W) {
        return this.getMaxWeight(0, val, wt, W)
    }
}
