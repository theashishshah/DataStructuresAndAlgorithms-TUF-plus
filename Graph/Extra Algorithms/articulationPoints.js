// using marked array
class Solution {
    articulationPoints(n, graph) {

        // TC: O(N) + (V + 2E) + N
        // SC: N + N + N + N + N + N
        const visited = new Array(n).fill(false)
        const low = new Array(n).fill(0)
        const tin = new Array(n).fill(0)
        let timer = 1
        const marked = new Array(n).fill(false)
        function dfs(node, parent) {
            visited[node] = true
            low[node] = tin[node] = timer++
            let child = 0
            for (const nextNode of graph[node]) {
                if (nextNode === parent) continue
                if (!visited[nextNode]) {
                    dfs(nextNode, node)
                    low[node] = Math.min(low[node], low[nextNode])
                    if (low[nextNode] >= tin[node] && parent !== -1) marked[node] = true
                    child++
                } else {
                    low[node] = Math.min(low[node], tin[nextNode])
                }
            }
            if (child > 1 && parent === -1) marked[node] = true
        }

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i, -1)
            }
        }
        const ans = []
        for (let i = 0; i < n; i++) {
            if (marked[i]) ans.push(i)
        }

        return ans.length > 0 ? ans : [-1]
    }
}
