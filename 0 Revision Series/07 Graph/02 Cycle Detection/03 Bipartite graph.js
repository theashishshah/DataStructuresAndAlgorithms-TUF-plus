/// Hint: color the graph with two colors, if you can without same adjacent color, then yes, else no

class Solution {
    check(node, colors, graph) {
        const queue = []
        colors[node] = 0
        queue.push(node)
        let head = 0
        while (head < queue.length) {
            const cnode = queue[head++]
            for (const nextNode of graph[cnode]) {
                if (colors[nextNode] === -1) {
                    colors[nextNode] = colors[cnode] === 0 ? 1 : 0
                    queue.push(nextNode)
                } else if (colors[nextNode] === colors[cnode]) return false
            }
        }
        return true
    }
    isBipartite(n, edges) {
        // code here
        const graph = new Array(n).fill().map(() => [])
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        }

        const colors = new Array(n).fill(-1)
        for (let i = 0; i < n; i++) {
            if (colors[i] === -1) {
                if (!this.check(i, colors, graph)) return false
            }
        }
        return true
    }
}