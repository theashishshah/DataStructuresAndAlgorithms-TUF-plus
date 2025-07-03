class Solution {
    dfs(node, visited, ans, graph) {
        // traverse its node
        for (const [nnode, weight] of graph[node]) {
            if (!visited[nnode]) {
                visited[nnode] = true
                this.dfs(nnode, visited, ans, graph)
                ans.push(nnode)
            }
        }
    }
    shortestPath(n, m, edges) {
        // [[0, 1, 2]] 0 ---2--->1
        // [[0, 2, 1]] 0 ---1--->2
        const graph = Array.from({ length: n }, () => []) // cuz there are n nodes
        for (const [from, to, weight] of edges) {
            graph[from].push([to, weight])
        }

        // now I've graph like this: [[[1, 2], [2, 1]]]
        // now do the toposort using DFS
        const visited = new Array(n).fill(0)
        const ans = []
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true
                this.dfs(i, visited, ans, graph)
                ans.push(i)
            }
        }

        // now you've the topo sort, traverse it
        const dist = new Array(n).fill(Infinity)
        dist[0] = 0
        while (ans.length) {
            const current = ans.pop()
            let localDistance = dist[current] // 0
            if (localDistance !== Infinity) {
                for (const [nnode, weight] of graph[current]) {
                    if (localDistance + weight < dist[nnode]) {
                        dist[nnode] = localDistance + weight
                    }
                }
            } else dist[current] = -1

        }
        return dist
    }
}
