function maxMeetings(start, end) {
        if(start.length === 1) return 1

        const meetings = []
        for(let i = 0; i < start.length; i++){
            meetings.push([start[i], end[i]])
        }

        meetings.sort((a, b) => a[1] - b[1])
        // console.log(meetings)
        let meetingCount = 0;
        let ed = 0
        for(let i = 0; i < meetings.length; i++){
            if(ed < meetings[i][0] ){
                meetingCount++
                ed = meetings[i][1]
            }
        }
        return meetingCount
    }