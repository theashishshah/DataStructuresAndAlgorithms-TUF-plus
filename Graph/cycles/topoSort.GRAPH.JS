class Solution {
    dfs(source, visited, graph, ans) {
        if (graph[source].length === 0) return
        for (const nnode of graph[source]) {
            if (!visited[nnode]) {
                visited[nnode] = true
                this.dfs(nnode, visited, graph, ans)
                ans.push(nnode)
            }
        }
    }
    topoSort(V, adj) {
        const visited = new Array(V).fill(false)
        const ans = []
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                visited[i] = true
                this.dfs(i, visited, adj, ans)
                ans.push(i)
            }
        }
        return ans.reverse()
    }
}

class Solution {

    topoSort(V, adj) {
        const ans = []
        const indegree = new Array(V).fill(0)

        // now find the indgree of all nodes
        for (let i = 0; i < V; i++) {
            for (const node of adj[i]) {
                indegree[node]++
            }
        }

        // create a queue ds and put nodes who's having 0 indegree
        const queue = []
        for (let i = 0; i < V; i++) {
            if (indegree[i] === 0) queue.push(i)
        }

        while (queue.length) {
            const current = queue.shift()
            ans.push(current)
            for (const nnode of adj[current]) {
                indegree[nnode]--
                if (indegree[nnode] === 0) {
                    queue.push(nnode)
                }
            }
        }
        return ans
    }
}

