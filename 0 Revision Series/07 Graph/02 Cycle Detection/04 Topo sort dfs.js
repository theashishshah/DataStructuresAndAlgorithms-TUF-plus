// Hint: traverse and insert 
class Solution {
    dfs(node, visited, graph, ans) {
        visited[node] = true
        for (const nextNode of graph[node]) {
            if (!visited[nextNode]) {
                this.dfs(nextNode, visited, graph, ans)
            }
        }
        ans.push(node)
    }
    topoSort(n, edges) {
        // code here
        const graph = new Array(n).fill().map(() => [])
        for (const [from, to] of edges) {
            graph[from].push(to)
        }

        const visited = new Array(n).fill(false)
        const ans = []
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                this.dfs(i, visited, graph, ans)
            }
        }
        return ans.reverse()

    }
}