# 🧠 DSA Pattern Sheet

This document contains the most common patterns in Data Structures & Algorithms. Recognizing these patterns is key to solving problems efficiently.

---

## 📌 1. Sliding Window

**Use When**: You're dealing with subarrays or substrings and need to optimize for time.

-   **Fixed Size Window** – When the window size is known in advance.
-   **Variable Size Window** – When the window size changes depending on the condition.

**Example Problems**:

-   [Maximum Sum Subarray of Size K (Easy)](https://leetcode.com/problems/maximum-average-subarray-i/)
-   [Longest Substring Without Repeating Characters (Medium)](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
-   [Minimum Size Subarray Sum (Medium)](https://leetcode.com/problems/minimum-size-subarray-sum/)

---

## 📌 2. Two Pointers

**Use When**: You need to iterate from both ends of a sorted array or string.

-   **Approach**: Left and right pointers move towards each other or in sync.

**Example Problems**:

-   [Two Sum II - Input Array Is Sorted (Easy)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
-   [Container With Most Water (Medium)](https://leetcode.com/problems/container-with-most-water/)
-   [3Sum (Medium)](https://leetcode.com/problems/3sum/)

---

## 📌 3. Fast & Slow Pointers

**Use When**: Detecting cycles or finding the middle of a linked list.

-   **Approach**: One pointer moves twice as fast.

**Example Problems**:

-   [Linked List Cycle (Easy)](https://leetcode.com/problems/linked-list-cycle/)
-   [Happy Number (Easy)](https://leetcode.com/problems/happy-number/)
-   [Middle of the Linked List (Easy)](https://leetcode.com/problems/middle-of-the-linked-list/)

---

## 📌 4. Merge Intervals

**Use When**: Working with overlapping intervals.

-   **Approach**: Sort by start, then merge based on overlap.

**Example Problems**:

-   [Merge Intervals (Medium)](https://leetcode.com/problems/merge-intervals/)
-   [Insert Interval (Medium)](https://leetcode.com/problems/insert-interval/)
-   [Meeting Rooms (Easy - LC Premium)](https://www.lintcode.com/problem/meeting-rooms/)

---

## 📌 5. Cyclic Sort

**Use When**: Given an array of numbers from 1 to N or 0 to N with missing/duplicates.

-   **Approach**: Place numbers at their correct indices.

**Example Problems**:

-   [Missing Number (Easy)](https://leetcode.com/problems/missing-number/)
-   [First Missing Positive (Hard)](https://leetcode.com/problems/first-missing-positive/)
-   [Find All Duplicates in an Array (Medium)](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

---

## 📌 6. In-place Linked List Reversal

**Use When**: Reversing all or part of a linked list.

-   **Approach**: Use pointers and reverse links.

**Example Problems**:

-   Reverse Linked List
-   Reverse Nodes in K-Group

---

## 📌 7. Breadth-First Search (BFS)

**Use When**: Shortest path, level order traversal.

-   **Approach**: Use a queue.

**Example Problems**:

-   Binary Tree Level Order Traversal
-   Minimum Depth of Binary Tree
-   Word Ladder

---

## 📌 8. Depth-First Search (DFS)

**Use When**: All paths, backtracking, or tree traversals.

-   **Approach**: Use recursion or stack.

**Example Problems**:

-   Path Sum
-   Number of Islands
-   All Paths From Source to Target

---

## 📌 9. Binary Search

**Use When**: Sorted array or matrix, search problems.

-   **Approach**: Divide and conquer.

**Example Problems**:
- [Minimum Distance to Place Cows (🟡 Medium)](https://www.interviewbit.com/problems/aggressive-cows/)

-   Binary Search
-   Search in Rotated Sorted Array
-   Peak Element

---

## 📌 10. Backtracking

**Use When**: All combinations or permutations.

-   **Approach**: DFS + State restoration.

**Example Problems**:

-   Subsets
-   Permutations
-   N-Queens
-   Sudoku Solver

---

## 📌 11. Dynamic Programming (DP)

**Use When**: Overlapping subproblems and optimal substructure.

-   **Approach**: Memoization (top-down) or Tabulation (bottom-up).

**Example Problems**:

-   Fibonacci Number
-   0/1 Knapsack
-   Longest Common Subsequence
-   House Robber

---

## 📌 12. Greedy

**Use When**: Local optimum leads to global optimum.

-   **Approach**: Sort or pick the best at each step.

**Example Problems**:

-   Jump Game
-   Activity Selection
-   Gas Station

---

## 📌 13. Topological Sort

**Use When**: You need a valid order of tasks (DAG).

-   **Approach**: Kahn's Algorithm or DFS post-order.

**Example Problems**:

-   Course Schedule
-   Alien Dictionary

---

## 📌 14. Union Find (Disjoint Set)

**Use When**: You want to detect or manage connected components.

-   **Approach**: Union by rank + path compression.

**Example Problems**:

-   Graph Valid Tree
-   Number of Provinces
-   Accounts Merge

---

## 📌 15. Trie (Prefix Tree)

**Use When**: Efficient prefix-based word search.

-   **Approach**: Tree of characters.

**Example Problems**:

-   Implement Trie
-   Word Search II
-   Replace Words

---

## 📌 16. Bit Manipulation

**Use When**: XOR tricks, bitmasking, toggling bits.

-   **Approach**: Use `<<`, `>>`, `&`, `|`, `^`.

**Example Problems**:

-   Single Number
-   Counting Bits
-   Subsets Using Bits

---

## 📌 17. Monotonic Stack / Queue

**Use When**: Next Greater/Smaller Element problems.

-   **Approach**: Use a stack to maintain increasing/decreasing order.

**Example Problems**:

-   Daily Temperatures
-   Next Greater Element
-   Largest Rectangle in Histogram

---

## 📌 18. Prefix Sum

**Use When**: Range sum or frequency count optimization.

-   **Approach**: Pre-compute sums in array.

**Example Problems**:

-   Subarray Sum Equals K
-   Range Sum Query
-   Minimum Size Subarray Sum

---

## 📌 19. Mathematical Patterns

**Use When**: Prime numbers, modular arithmetic, GCD, etc.

-   **Approach**: Sieve of Eratosthenes, Euclidean algorithm, etc.

**Example Problems**:

-   Count Primes
-   GCD of Strings
-   Pow(x, n)

---

## 📌 20. Breadth-First Search (BFS)

### ✅ Use When:

-   You need to find the **shortest path** in an unweighted graph or grid.
-   You want to explore all nodes **level-by-level** (i.e., all nodes at depth `d` before depth `d+1`).
-   You're dealing with **connected components**, **tree/graph traversal**, or **flood fill**.
-   Problems require a **multi-source expansion** (e.g. rotting oranges, spreading fire).

---

### 🔧 Approach:

1. Use a **queue (FIFO)** to keep track of nodes to visit.
2. Mark nodes as **visited** once they are enqueued to avoid cycles.
3. While the queue is not empty:
    - Dequeue the front node.
    - Enqueue all of its unvisited, valid neighbors.
4. Continue until all reachable nodes are visited.

---

### 🧠 Typical Applications:

-   Finding the **shortest path** in an unweighted graph or 2D grid.
-   **Counting islands** or connected regions in a matrix.
-   **Level-order traversal** in trees.
-   Solving puzzles like **Word Ladder**, **Sliding Puzzle**, or **Knight’s shortest path**.
-   **Maze solving**.
-   **Topological sort** (Kahn's Algorithm variant).

---

**Example Problems**:

- [Flood Fill (🟢 Easy)](https://leetcode.com/problems/flood-fill/)
- [Number of Enclaves (🟡 Medium)](https://leetcode.com/problems/number-of-enclaves/)
- [Rotting Oranges (🟡 Medium)](https://leetcode.com/problems/rotting-oranges/)
- [01 Matrix (🟡 Medium)](https://leetcode.com/problems/01-matrix/)
- [Surrounded Regions (🟡 Medium)](https://leetcode.com/problems/surrounded-regions/)



---

## ✍️ How to Use This Sheet 

1. Identify the pattern of the current problem.
2. Refer to the technique used.
3. Add the problem under its respective category.
4. Practice variations of the pattern to master it.

---

Happy Coding 🚀
