// Use the thought process how someone can visit first same node on the same level
class Solution {
    bfs(node, visited, graph) {
        const queue = []
        visited[node] = true
        queue.push([node, -1])
        let head = 0
        while (head < queue.length) {
            const [cnode, parent] = queue[head++]
            for (const nextNode of graph[cnode]) {
                if (nextNode === parent) continue
                if (visited[nextNode]) return true
                visited[nextNode] = true
                queue.push([nextNode, cnode])
            }
        }
        return false
    }
    isCycle(n, edges) {
        const graph = new Array(n).fill().map(() => [])
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        }
        const visited = new Array(n).fill(false)
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                if (this.bfs(i, visited, graph)) return true
            }
        }
        return false
    }
}