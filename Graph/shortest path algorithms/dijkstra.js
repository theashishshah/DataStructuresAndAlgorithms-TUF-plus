class MinPQ {
    constructor() {
        // [[node, distance], [node, distance], [node, distance]]
        this.heap = []
    }

    push(element) {
        // element = [node, distance]
        this.heap.push(element)
        // heapifyUp 
        this.heapifyUp(this.heap.length - 1)

    }

    pop() {
        if (!this.heap.length) return null
        if (this.heap.length === 1) return this.heap.pop()

        // take the first element
        const min = this.heap[0]
        // swap with the last element
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        // now remove from the heap the last element cuz ive taken it out 
        this.heap.pop()

        if (this.heap.length > 0) {
            this.heapifyDown(0)
        }
        return min

    }

    size() {
        return this.heap.length
    }

    heapifyUp(index) {
        if (index <= 0) return

        const parentIndex = Math.floor((index - 1) / 2)
        const [node, dist] = this.heap[index]
        const [pnode, pdist] = this.heap[parentIndex]
        if (pdist > dist) {
            // swap the elements
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            this.heapifyUp(parentIndex)
        }

    }

    heapifyDown(index) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let smallest = index

        if (leftChild < this.heap.length && this.heap[leftChild][1] < this.heap[smallest][1]) {
            smallest = leftChild
        }

        if (rightChild < this.heap.length && this.heap[rightChild][1] < this.heap[smallest][1]) {
            smallest = rightChild
        }

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]]
            this.heapifyDown(smallest)
        }

    }
}

class Solution {
    dijkstra(n, graph, source) {
        const dist = new Array(n).fill(Infinity)
        dist[source] = 0

        const pq = new MinPQ()
        pq.push([source, 0])

        while (pq.size()) {
            const [node, distance] = pq.pop();
            if (distance > dist[node]) continue;

            // now Traverse its neighbors
            for (const it of graph[node]) {
                const [nnode, ndistance] = it
                if (distance + ndistance < dist[nnode]) {
                    dist[nnode] = distance + ndistance
                    pq.push([nnode, dist[nnode]])
                }
            }
        }
        return dist
    }
}




// Minimum Priority Queue Implementation
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

class Solution {
    /* Function to find the shortest distance of all 
    the vertices from the source vertex S. */
    dijkstra(V, adj, S) {
        // Custom min-priority queue
        let pq = new MinPriorityQueue();

        // Distance array
        let dist = new Array(V).fill(1e9);

        // Distance of source node from itself is 0
        dist[S] = 0;

        // Add the source node to the priority queue
        pq.push([0, S]);

        // Until the priority queue is empty
        while (!pq.isEmpty()) {
            // Get the tentative distance
            let [dis, node] = pq.pop();

            // Traverse all its neighbors
            for (let it of adj[node]) {
                let adjNode = it[0]; // node
                let edgeWt = it[1]; // edge weight

                /* If the tentative distance to 
                reach adjacent node is smaller 
                than the known distance */
                if (dis + edgeWt < dist[adjNode]) {
                    // Update the known distance
                    dist[adjNode] = dis + edgeWt;

                    // Push the new pair in priority queue
                    pq.push([dist[adjNode], adjNode]);
                }
            }
        }

        // Return the result
        return dist;
    }
}

let V = 2, S = 0;
let adj = [
    [[1, 9]],
    [[0, 9]]
];

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to find the shortest distance 
of each node from the source node */
let ans = sol.dijkstra(V, adj, S);

// Output
console.log("The shortest distance of nodes from the source node is: ");
for (let i = 0; i < V; i++) {
    console.log(ans[i] + " ");
}