class PQ {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    push(element) {
        // element: [distance, [node, parent]]
        this.heap.push([...element])
        this.heapifyUp(this.heap.length - 1)
    }

    pop() {
        if (this.heap.length === 0) return
        if (this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
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
            const temp = this.heap[index]
            this.heap[index] = this.heap[smallestIndex]
            this.heap[smallestIndex] = temp
            this.heapifyDown(smallestIndex)
        }
    }
}

class Solution {
    spanningTree(n, graph) {
        // SC: O(N) + O(N + E)
        // TC: NlogE + N * logE (for each node * heapify)
        const visited = new Array(n).fill(false)
        let path = 0
        const pq = new PQ()
        pq.push([0, 0])
        while (pq.size()) {
            const [distance, node] = pq.pop()
            if (!visited[node]) {
                visited[node] = true
                path += distance
                // explore its neighbours
                for (const [nextNode, weight] of graph[node]) {
                    if (!visited[nextNode]) {
                        pq.push([weight, nextNode])
                    }
                }
            }
        }

        return path
    }
}

