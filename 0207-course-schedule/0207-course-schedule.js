/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(n, arr) {
    const graph = Array.from({length: n}, () => [])
        for(const node of arr){
            const [to, fromm] = node
            graph[fromm].push(to)
        }

        // find inDegree for all
        const indegree = new Array(n).fill(0)
        for(let i = 0; i < n; i++){
            for(const nnode of graph[i]){
                indegree[nnode]++
            }
        }

        const queue = []
        // insert all the nodes who's indegree is 0
        for(let i = 0; i < n; i++){
            if(indegree[i] === 0) queue.push(i)
        }

        const ans = []
        while(queue.length){
            const node = queue.shift()
            ans.push(node)
            for(const nnode of graph[node]){
                indegree[nnode]--
                if(indegree[nnode] === 0) queue.push(nnode)
            }
        }
        return ans.length !== n ? false : true
};