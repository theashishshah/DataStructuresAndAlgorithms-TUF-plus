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
    MinimumEffort(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        const pq = new PQ()
        dist[0][0] = 0
        pq.push([0, [0, 0]])
        while (pq.size() > 0) {
            const [effort, node] = pq.pop()
            if (node[0] === rows - 1 && node[1] === cols - 1) return effort
            const [crow, ccol] = node
            // Traverse in all four directions
            for (const [dx, dy] of directions) {
                const nrow = dx + crow
                const ncol = dy + ccol
                if (nrow >= 0 && ncol >= 0 &&
                    ncol < cols && nrow < rows
                ) {
                    const currDiff = Math.abs(grid[crow][ccol] - grid[nrow][ncol])
                    const maxEffort = Math.max(currDiff, effort)
                    if (maxEffort < dist[nrow][ncol]) {
                        dist[nrow][ncol] = maxEffort
                        pq.push([maxEffort, [nrow, ncol]])
                    }
                }
            }
        }
        return -1
    }
}
