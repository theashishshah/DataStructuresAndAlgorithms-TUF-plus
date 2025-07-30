### What is heap Data Structure and why, where do we use it?
A heap is a special tree-based data structure that satisfies the heap property. It is commonly used to efficiently solve problems involving priority and to implement algorithms like sorting and finding the smallest or largest elements.

#### Leaf & Non-Leaf nodes
```js
const nonLeafNodes = 0 to Math.floor(n/2) - 1
const leafNodes = Math.floor(n/2) to n - 1

const parentNode = Math.floor(child - 1 /2) or 
const parentNode = Math.ceil(child/2) - 1
```





####  Full Binary Tree?
-> Every node either has 0 or 2 children.

```
    1                           
   / \                           
  2   3                              
 / \                              
4   5  
No❌  

    1
   / \
  2   3
 / \ / \
4  5 6  7
yes✅
```

#### Complete binary tree
-> All levels must be filled except the last level, and the last level must be filled from left to right.


#### Degenerated or pathological Tree
-> A tree where each parent has only one child. (Linked list kinda structure)

#### Perfect binary tree
-> All internal levels are have two children and all leaves are at the same level.

#### Balanced binary tree
-> A tree where diff of left and right sub-tree of each node should not >1.

#### Almost complete Binary tree.
-> same as comlete binary tree.