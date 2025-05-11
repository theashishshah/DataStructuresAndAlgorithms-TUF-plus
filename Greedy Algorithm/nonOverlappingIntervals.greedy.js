function MaximumNonOverlappingIntervals(intervals) {
        if(intervals.length === 1) return 0

        // sort the intervals in non-decreasing order
        intervals.sort((a, b) => a[1] - b[1])
        let end =  0
        let removeCount = 0
        for(let i = 0; i < intervals.length; i++){
            // I'll check if the current interval is overlapping with prev or not
            if( intervals[i][0] < end) {
                removeCount++
                continue
            }
            end = intervals[i][1]
        }
        return removeCount
    }