class Solution {
    dfs(source, visited, graph, path) {
        for (const nnode of graph[source]) {
            if (!visited[nnode]) {
                visited[nnode] = true
                path[nnode] = true
                if (this.dfs(nnode, visited, graph, path)) return true
                path[nnode] = false
            } else if (path[nnode]) return true
        }
        return false
    }
    isCyclic(V, graph) {
        const visited = new Array(V).fill(false)
        const path = new Array(V).fill(false)

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                visited[i] = true
                path[i] = true
                if (this.dfs(i, visited, graph, path)) return true
                path[i] = false
            }
        }
        return false
    }
}