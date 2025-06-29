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