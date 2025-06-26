// using adj matrix

const adj = Array.from({ length: 5 }, () => Array(3).fill(0))
for (cosnt[u, v] of edges) {
    adj[u][v] = 1
    adj[v][u] = 1
}

const adjWeighted = Array.from({ length: 5 }, () => Array(3).fill(0))
for (cosnt[u, v, w] of edges) {
    adjWeighted[u][v] = w
    adjWeighted[v][u] = w
}
