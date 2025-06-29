/**
 * @param {number[][]} graph
 * @return {boolean}
 */
function isGraphNotBipartite(src, color, graph) {
    for (const nnode of graph[src]) {
        if (color[nnode] === -1) {
            color[nnode] = 1 - color[src]
            if (isGraphNotBipartite(nnode, color, graph)) return true
        } else if (color[nnode] === color[src]) return true
    }
    return false
}
var isBipartite = function (graph) {
    const n = graph.length
    const color = new Array(n).fill(-1)
    for (let i = 0; i < n; i++) {
        if (color[i] === -1) {
            color[i] = 1
            if (isGraphNotBipartite(i, color, graph)) return false
        }
    }
    return true
};


// bfs
class Solution {
    findBi(src, color, graph) {
        color[src] = 0
        const queue = []
        queue.push(src)
        while (queue.length) {
            const node = queue.shift()
            for (const nnode of graph[node]) {
                if (color[nnode] === -1) {
                    color[nnode] = 1 - color[node]
                    queue.push(nnode)
                } else if (color[nnode] === color[node]) return true
            }
        }
        return false
    }
    isBipartite(V, adj) {
        const color = new Array(V).fill(-1)
        for (let i = 0; i < V; i++) {
            if (color[i] === -1) {
                if (this.findBi(i, color, adj)) return false
            }
        }
        return true
    }
}
