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

class Solution {
    shortestPath(grid, source, destination) {
        // grid: [[], []]
        // source: [row, col]
        // destination: [row, col]
        const n = grid.length
        const m = grid[0].length
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        const dist = Array.from({ length: n }, () => Array(m).fill(Infinity))
        const pq = new PQ()
        const [srow, scol] = source
        dist[srow][scol] = 0
        pq.push([0, [srow, scol]])

        while (pq.size() > 0) {
            const [distance, node] = pq.pop() // node: [row, col]
            const [crow, ccol] = node
            if (crow === destination[0] && ccol === destination[1]) return distance
            for (const [dx, dy] of directions) {
                const nrow = dx + crow
                const ncol = dy + ccol
                if (nrow >= 0 && ncol >= 0 &&
                    nrow < n && ncol < m && grid[nrow][ncol] === 1
                    && distance + 1 < dist[nrow][ncol]
                ) {
                    dist[nrow][ncol] = distance + 1
                    pq.push([dist[nrow][ncol], [nrow, ncol]])
                }
            }

        }
        return -1
    }
}
