function  candy(ratings) {
        // TC: O(N) + O(N) + O(N)
        // SC: O(N) + O(N) + 1
        let n = ratings.length
        const leftCandies = new Array(n).fill(1)
        const rightCandies = new Array(n).fill(1)
       
       // Traverse left to right
       for(let i = 1; i < n; i++){
            if(ratings[i] > ratings[i - 1]) leftCandies[i] = leftCandies[i - 1] + 1
       }

       // Traverse right to left
       for(let i = n - 2; i >= 0; i--){
            if(ratings[i] > ratings[i + 1]) rightCandies[i] = rightCandies[i + 1] + 1
       }

        return leftCandies.reduce((sum, _, index) => sum + Math.max(leftCandies[index], rightCandies[index]), 0)
    }