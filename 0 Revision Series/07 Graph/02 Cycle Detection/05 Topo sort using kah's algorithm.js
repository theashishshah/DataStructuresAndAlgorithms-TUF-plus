// Hint💡: use indegree concept.
class Solution {

    topoSort(n, edges) {
        // code here
        const graph = new Array(n).fill().map(() => [])
        for (const [from, to] of edges) {
            graph[from].push(to)
        }

        const indegree = new Array(n).fill(0)
        for (let i = 0; i < n; i++) {
            for (const nextNode of graph[i]) indegree[nextNode]++
        }

        // Insert those nodes, whose indegree is zero
        const ans = []
        const queue = []
        for (let i = 0; i < n; i++) {
            if (indegree[i] === 0) {
                ans.push(i)
                queue.push(i)
            }
        }

        let head = 0
        while (head < queue.length) {
            const node = queue[head++]
            for (const nextNode of graph[node]) {
                indegree[nextNode]--
                if (indegree[nextNode] === 0) {
                    queue.push(nextNode)
                    ans.push(nextNode)
                }
            }
        }
        return ans
    }
}