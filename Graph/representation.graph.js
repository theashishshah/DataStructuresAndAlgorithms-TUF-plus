// for biderectionaL GRAPH

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


const list = Array.from({ length: n }, () => [])

for (const [u, v] of edges) {
    list[u].push(v)
    list[v].push(u)
}

const listWeighted = Array.from( { length: n }, () => [])

for (const [u, v, w] of edges) {
    list[u].push([v, w])
    list[v].push([u, w])
}
