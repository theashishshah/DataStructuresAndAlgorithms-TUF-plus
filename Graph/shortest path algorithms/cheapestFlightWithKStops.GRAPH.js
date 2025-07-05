
var findCheapestPrice = function (n, flights, src, dst, k) {
    const graph = Array.from({ length: n }, () => [])
    for (const [from, to, price] of flights) {
        graph[from].push([to, price])
    }
    const queue = []
    const dist = Array(n).fill(Infinity)
    queue.push([0, src, 0]) // [stops, node, distance]
    dist[src] = 0
    while (queue.length) {
        const [stops, node, distance] = queue.shift()
        if (stops > k) continue
        for (const [nnode, price] of graph[node]) {
            if (price + distance < dist[nnode] && stops <= k) {
                dist[nnode] = price + distance
                queue.push([stops + 1, nnode, dist[nnode]])
            }
        }
    }

    if (dist[dst] !== Infinity) return dist[dst]
    else return -1
};