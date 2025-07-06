/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
class PQ {
    constructor() {
        this.heap = []
    }

    push(element) {
        this.heap.push([...element])
        this.heapifyUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    size() {
        return this.heap.length
    }

    heapifyDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2

        let smallestIndex = index

        if (leftChild < this.heap.length && this.heap[leftChild][0] < this.heap[smallestIndex][0]) {
            smallestIndex = leftChild
        }
        if (rightChild < this.heap.length && this.heap[rightChild][0] < this.heap[smallestIndex][0]) {
            smallestIndex = rightChild
        }

        if (smallestIndex !== index) {
            const temp = this.heap[smallestIndex]
            this.heap[smallestIndex] = this.heap[index]
            this.heap[index] = temp
            this.heapifyDown(smallestIndex)
        }
    }

    heapifyUp(index) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (this.heap[parentIndex][0] > this.heap[index][0]) {
            const temp = this.heap[parentIndex]
            this.heap[parentIndex] = this.heap[index]
            this.heap[index] = temp
            this.heapifyUp(parentIndex)
        }

    }
}
var countPaths = function (n, roads) {
    const mod = 1e9 + 7
    const graph = Array.from({ length: n }, () => [])
    for (const [from, to, time] of roads) {
        graph[from].push([to, time])
        graph[to].push([from, time])
    }

    // find the shortest path first
    const pq = new PQ()
    const dist = Array(n).fill(Infinity)
    const ways = Array(n).fill(0)
    ways[0] = 1
    dist[0] = 0
    pq.push([0, 0])
    while (pq.size()) {
        const [distance, node] = pq.pop()
        // explore it neighbours
        for (const [nextNode, time] of graph[node]) {
            if ((time + distance) < dist[nextNode]) {
                ways[nextNode] = ways[node]
                dist[nextNode] = time + distance
                pq.push([dist[nextNode], nextNode])
            } else if ((time + distance) === dist[nextNode]) {
                ways[nextNode] = (ways[nextNode] + ways[node]) % mod
            }
        }
    }
    return ways[n - 1] % mod
}