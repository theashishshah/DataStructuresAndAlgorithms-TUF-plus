class Solution {

    // TC: O(N + E)
    // SC: O(N + N + (N + E) + N)
    dfs(node, visited, path, graph) {
        visited[node] = true
        path[node] = true
        for (const nnode of graph[node]) {
            if (!visited[nnode]) {
                if (this.dfs(nnode, visited, path, graph)) return true
            } else if (path[nnode]) return true
        }
        path[node] = false
        return false
    }
    canFinish(N, arr) {
        // first create the graph
        const graph = Array.from({ length: N }, () => [])
        for (const node of arr) {
            const [to, fromm] = node
            graph[fromm].push(to)
        }

        // use dfs to detect the graph, if found then false, else true
        const visited = new Array(N).fill(false)
        const path = new Array(N).fill(false)
        for (let i = 0; i < N; i++) {
            if (!visited[i]) {
                if (this.dfs(i, visited, path, graph)) return false
            }
        }
        return true
    }
}


// using topo sort
class Solution {
    canFinish(n, arr) {
        // using topo sorting
        // create graph for the list
        const graph = Array.from({ length: n }, () => [])
        for (const node of arr) {
            const [to, fromm] = node
            graph[fromm].push(to)
        }

        // find inDegree for all
        const indegree = new Array(n).fill(0)
        for (let i = 0; i < n; i++) {
            for (const nnode of graph[i]) {
                indegree[nnode]++
            }
        }

        const queue = []
        // insert all the nodes who's indegree is 0
        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) queue.push(i)
        }

        const ans = []
        while (queue.length) {
            const node = queue.shift()
            ans.push(node)
            for (const nnode of graph[node]) {
                indegree[nnode]--
                if (indegree[nnode] === 0) queue.push(nnode)
            }
        }
        return ans.length !== n ? false : true
    }
}