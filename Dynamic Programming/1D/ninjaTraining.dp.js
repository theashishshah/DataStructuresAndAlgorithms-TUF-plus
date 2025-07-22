class Solution {
    findMaxMeritPoints(day, last, matrix) {
        if (day === 0) {
            let max = -Infinity
            for (let i = 0; i < 3; i++) {
                if (i !== last) {
                    max = Math.max(matrix[day][i], max)
                }
            }
            return max
        }


        let max = -Infinity
        for (let i = 0; i < 3; i++) {
            if (i !== last) {
                // console.log("Day value", day)
                const curr = matrix[day][i] + this.findMaxMeritPoints(day - 1, i, matrix)
                max = Math.max(max, curr)
            }
        }
        return max
    }

    ninjaTraining(matrix) {
        const n = matrix.length
        if (n === 0) return 0
        if (n === 1) return Math.max(...matrix[0])

        return this.findMaxMeritPoints(n - 1, 3, matrix)
    }
}