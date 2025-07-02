class Solution {
    // TC: O(N + N) + Nlog(N)
    // SC: O(N) * 3
    dfs(node, path, visited, ans, graph) {
        visited[node] = true
        path[node] = true
        for (const nnode of graph[node]) {
            if (!visited[nnode]) {
                if (this.dfs(nnode, path, visited, ans, graph)) return true
            } else if (path[nnode]) {
                return true
            }
        }
        path[node] = false
        ans.push(node)
        return false
    }

    eventualSafeNodes(n, graph) {
        const path = new Array(n).fill(false)
        const visited = new Array(n).fill(false)
        const ans = []

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                this.dfs(i, path, visited, ans, graph)
            }
        }
        return ans.sort((a, b) => a - b)
    }
}


// using bfs
class Solution {
    eventualSafeNodes(V, adj) {

        // TC: O(N + E) + 
        const graph = Array.from({ length: V }, () => [])
        // reverse the graph
        for (let i = 0; i < V; i++) {
            for (const nnode of adj[i]) {
                graph[nnode].push(i)
            }
        }

        const inDegree = new Array(V).fill(0)
        for (let i = 0; i < V; i++) {
            for (const nnode of graph[i]) {
                inDegree[nnode]++
            }
        }

        // insert the nodes who are having inDegree 0
        const queue = []
        for (let i = 0; i < V; i++) {
            if (inDegree[i] === 0) queue.push(i)
        }

        // start traversing bfs who's inDegree is 0
        const ans = []
        while (queue.length) {
            const node = queue.shift()
            ans.push(node)
            for (const nnode of graph[node]) {
                inDegree[nnode]--
                if (inDegree[nnode] === 0) queue.push(nnode)
            }
        }
        return ans.sort((a, b) => a - b)
    }
}
