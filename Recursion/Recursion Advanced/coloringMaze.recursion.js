function isPossible(node, num, adj, color) {
    for (let i = 0; i < adj[node].length; i++) {
        if (i === node) continue
        if (adj[node][i]) {
            if (color[i] === num) return false
        }
    }
    return true
}

function backtrack(node, colored, adj, m, n) {
    if (node === n) return true
    // start check each color
    for (let num = 1; num <= m; num++) {
        if (this.isPossible(node, num, adj, colored)) {
            colored[node] = num
            const value = this.backtrack(node + 1, colored, adj, m, n)
            if (value) return true
            colored[node] = - 1
        }
    }
    return false
}

function graphColoring(edges, m, n) {
    // generate adjacency matrix
    const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0))
    edges.forEach(([i, j]) => {
        adjMatrix[i][j] = 1
        adjMatrix[j][i] = 1
    })
    const color = new Array(n).fill(-1)
    // console.log(color)
    // console.log(adjMatrix)
    return this.backtrack(0, color, adjMatrix, m, n)
}