class Solution {
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
