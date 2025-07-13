class Solution {
    dfs(node, stack, graph, visited) {
        // traverse it neighbors
        for (const nextNode of graph[node]) {
            if (!visited[nextNode]) {
                visited[nextNode] = true
                this.dfs(nextNode, stack, graph, visited)
                stack.push(nextNode)
            }
        }
    }

    kosaraju(V, graph) {
        const stack = []
        const visited = new Array(V).fill(false)
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                visited[i] = true
                this.dfs(i, stack, graph, visited)
                stack.push(i)
            }
        }

        // now reverse the graph
        const graphT = Array.from({ length: V }, () => [])
        for (let i = 0; i < V; i++) {
            for (const from of graph[i]) {
                graphT[from].push(i)
            }
        }
        const visitedT = new Array(V).fill(false)
        let count = []
        while (stack.length) {
            const node = stack.pop()
            let temp = []
            if (!visitedT[node]) {
                visitedT[node] = true
                this.dfs(node, temp, graphT, visitedT)
                temp.push(node)
            }
            if (temp.length > 0) count.push([...temp])
        }

        return count.length
    }
}