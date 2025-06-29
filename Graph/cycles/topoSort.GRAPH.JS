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