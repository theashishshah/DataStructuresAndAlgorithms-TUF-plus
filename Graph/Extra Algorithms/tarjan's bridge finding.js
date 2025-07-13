class Solution {
    constructor() {
        this.timer = 1
    }
    dfs(node, parent, visited, graph, tin, low, ans) {
        visited[node] = true
        low[node] = tin[node] = this.timer++
        // now check for its neighbors
        for (const nextNode of graph[node]) {
            if (nextNode === parent) continue
            if (!visited[nextNode]) {
                this.dfs(nextNode, node, visited, graph, tin, low, ans)
                low[node] = Math.min(low[node], low[nextNode])
                if (tin[node] < low[nextNode]) {
                    ans.push([node, nextNode])
                }
            } else {
                low[node] = Math.min(tin[nextNode], low[node])
            }
        }
    }
    criticalConnections(n, edges) {
        // step 1: create a adj list
        const graph = Array.from({ length: n }, () => [])
        for (const [from, to] of edges) {
            graph[from].push(to)
            graph[to].push(from)
        }

        const visited = new Array(n).fill(false)
        const tin = new Array(n).fill(0)
        const low = new Array(n).fill(0)
        const ans = []
        this.dfs(0, -1, visited, graph, tin, low, ans)
        return ans
    }
}