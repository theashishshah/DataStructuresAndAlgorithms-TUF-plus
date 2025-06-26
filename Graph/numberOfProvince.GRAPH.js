class Solution {

    dfs(node, graph, visited, n) {
        for (let neighbour = 0; neighbour < n; neighbour++) {
            if (graph[node][neighbour] === 1 && !visited[neighbour]) {
                visited[neighbour] = true
                this.dfs(neighbour, graph, visited, n)
            }
        }
    }

    numProvinces(graphMatrix) {
        const n = graphMatrix.length
        const visited = new Array(n).fill(false)

        let count = 0
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                count++
                visited[i] = true
                this.dfs(i, graphMatrix, visited, n)
            }
        }
        return count
    }
}