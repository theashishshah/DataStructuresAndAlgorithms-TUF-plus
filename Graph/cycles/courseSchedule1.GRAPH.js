class Solution {

    // TC: O(N + E)
    // SC: O(N + N + (N + E) + N)
    dfs(node, visited, path, graph) {
        visited[node] = true
        path[node] = true
        for (const nnode of graph[node]) {
            if (!visited[nnode]) {
                if (this.dfs(nnode, visited, path, graph)) return true
            } else if (path[nnode]) return true
        }
        path[node] = false
        return false
    }
    canFinish(N, arr) {
        // first create the graph
        const graph = Array.from({ length: N }, () => [])
        for (const node of arr) {
            const [to, fromm] = node
            graph[fromm].push(to)
        }

        // use dfs to detect the graph, if found then false, else true
        const visited = new Array(N).fill(false)
        const path = new Array(N).fill(false)
        for (let i = 0; i < N; i++) {
            if (!visited[i]) {
                if (this.dfs(i, visited, path, graph)) return false
            }
        }
        return true
    }
}