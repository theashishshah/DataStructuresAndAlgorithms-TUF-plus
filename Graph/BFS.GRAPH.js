function bfsOfGraph(vertexCount, edges) {
    const graph = Array.from({ length: vertexCount }, () => [])
    for (const [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    const visited = new Array(vertexCount).fill(false)
    const bfsOrder = []

    for (let i = 0; i < vertexCount; i++){
        if(!visited[i]) bfs(i, graph, visited, bfsOrder)
    }

    return bfsOrder

}

function bfs(source, graph, visited, bfsOrder) {
    const queue = []
    visited[source] = true
    queue.push(source)

    while (queue.length) {
        const current = queue.shift()
        bfsOrder.push(current)
        for (const neighbour of graph[current]) {
            if (!visited[neighbour]) {
                visited[neighbour] = true
                
            }
        }
    }

}