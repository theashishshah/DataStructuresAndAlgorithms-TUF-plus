class Solution {
    dfs(node, parent, graph, visited) {
        visited[node] = true
        for (const nextNode of graph[node]) {
            if (nextNode === parent) continue
            if (visited[nextNode]) return true
            if (this.dfs(nextNode, node, graph, visited)) return true
        }
        return false
    }
    isCycle(n, graph) {
        const visited = new Array(n).fill(false)
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                if (this.dfs(i, -1, graph, visited)) return true
            }
        }
        return false
    }
}