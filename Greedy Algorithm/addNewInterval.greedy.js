function insertNewInterval(intervels, newInterval) {
        const result = []
        let i = 0

        // add all intervals ending before new interval starts
        while (i < intervels.length && intervels[i][1] < newInterval[0]) result.push(intervels[i++])

        // Merge all overlapping Intervals
        while (i < intervels.length && intervels[i][0] <= newInterval[1]) {// do the current interval start before the end of the newInterval
            newInterval[0] = Math.min(newInterval[0], intervels[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervels[i][1]);
            i++;
        }
        result.push(newInterval)

        // add the remaining intervals
        while(i < intervels.length) result.push(intervels[i++])

        return result
    }