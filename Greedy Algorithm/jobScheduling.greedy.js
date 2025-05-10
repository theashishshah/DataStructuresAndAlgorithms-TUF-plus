function JobScheduling(Jobs) {
    //your code goes here
    if (Jobs.length === 1) return Jobs[0][2]

    // Sort the job with max profit first
    Jobs.sort((a, b) => b[2] - a[2])
    const maxDays = Math.max(...Jobs.map(row => row[1]))
    const visited = new Array(maxDays + 1).fill(false)
    let maxProfit = 0
    let jobs = 0
    for(let i = 0; i < Jobs.length; i++){
        let deadline = Jobs[i][1]
        while(deadline > 0 && visited[deadline]) deadline--
        if(deadline > 0){
            visited[deadline] = true
            jobs++
            maxProfit += Jobs[i][2]
        }
    }

    return [jobs, maxProfit]
}