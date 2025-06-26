function DFS(vertexCount, edges) {
    const graph = Array.from({ length: vertexCount }, () => [])
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    const visited = new Array(vertexCount).fill(false)
    const result = []

    // traverse to each node it there is chance of broken graph
    for (let i = 0; i < vertexCount; i++){
        if (!visited[i]) dfs(i, graph, visited, result)
    }
    return result
}

function dfs(node, graph, visited, result) {
    visited[node] = true
    result.push(node)
    for (const neighbor of graph[node]) {
        if(!visited[neighbor]) dfs(neighbor, graph, visited, result)
    }
}