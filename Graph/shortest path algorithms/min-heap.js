class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Insert a new element in the priority queue
    push(element) {
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
    }

    /* Remove and return the element with the 
    highest priority (smallest element) */
    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return min;
    }

    // Get the element with the highest priority without removing it
    peek() {
        return this.heap[0];
    }

    // Return true if the priority queue is empty */
    isEmpty() {
        return this.heap.length === 0;
    }

    // Restore heap order after adding a new element
    bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (element[0] >= parent[0]) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    // Restore heap order after removing an element
    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftIndex < length) {
                if (this.heap[leftIndex][0] < element[0]) {
                    swapIndex = leftIndex;
                }
            }

            if (rightIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightIndex][0] < element[0]) ||
                    (swapIndex !== null && this.heap[rightIndex][0] < this.heap[swapIndex][0])
                ) {
                    swapIndex = rightIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }
        this.heap[index] = element;
    }
}