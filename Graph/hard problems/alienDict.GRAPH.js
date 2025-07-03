class Solution {
    findOrder(dict, n, k) {
        // build the graph
        const graph = Array(k).fill().map(() => [])

        for (let i = 0; i < n - 1; i++) {
            const curr = dict[i]
            const next = dict[i + 1]
            const len = Math.min(curr.length, next.length)
            for (let j = 0; j < len; j++) {
                if (curr[j] !== next[j]) {
                    const fromIndex = curr[j].charCodeAt(0) - 97
                    const toIndex = next[j].charCodeAt(0) - 97
                    graph[fromIndex].push(toIndex)
                    break
                }
            }
        }
        // console.log(graph)
        // find indegree 
        const indegree = Array(k).fill(0)
        for (let i = 0; i < k; i++) {
            for (const nnode of graph[i]) indegree[nnode]++
        }

        // insert into queue who's having indegree 0
        const queue = []
        for (let i = 0; i < k; i++) {
            if (!indegree[i]) queue.push(i)
        }

        const ans = []
        // now Traverse the graph
        while (queue.length) {
            const node = queue.shift()
            ans.push(node)
            for (const nnode of graph[node]) {
                indegree[nnode]--
                if (!indegree[nnode]) queue.push(nnode)
            }
        }

        // map the number to respective characters
        let strAns = ""
        for (let i = 0; i < ans.length; i++) {
            strAns += String.fromCharCode(97 + ans[i])
            strAns += " "
        }
        return strAns
    }
}