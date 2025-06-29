class Solution {
    // TC: O(V + E)
    // SC: O(V) + O(V)

    detect(src, visited, adj) {
        const queue = []
        visited[src] = true
        queue.push([src, -1])
        while (queue.length) {
            for (let i = 0; i < queue.length; i++) {
                const [current, prev] = queue.shift()
                for (let j = 0; j < adj[current].length; j++) {
                    const nnode = adj[current][j]
                    if (!visited[nnode]) {
                        visited[nnode] = true
                        queue.push([nnode, current])
                    } else if (nnode !== prev) return true
                }
            }
        }
        return false
    }
    isCycle(n, adj) {
        const visited = new Array(n).fill(false)
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                if (this.detect(i, visited, adj)) return true
            }
        }


        return false
    }
}