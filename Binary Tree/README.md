# Binary Tree: Definition

A **binary tree** is a hierarchical data structure where each node has at most two children, referred to as the left child and the right child. It is a tree in which each node has at most two child nodes. Binary trees are the basis for many other tree structures and are commonly used in various applications like expression parsing, decision making, and database indexing.

## Types of Binary Trees

### 1. Full Binary Tree

A **Full Binary Tree** is a type of binary tree in which every node has either 0 or 2 children. In other words, each node in the tree must either be a leaf node (with no children) or have exactly two children.

#### Diagram:
    1
   / \
  2   3
 / \ / \
4  5 6  7



- **Properties:**
  - Every non-leaf node has exactly two children.
  - The number of leaves is equal to the number of internal nodes plus one.

---

### 2. Complete Binary Tree

A **Complete Binary Tree** is a binary tree in which all the levels are fully filled except possibly for the last level. In the last level, all the nodes are as far left as possible.

#### Diagram:
    1
   / \
  2   3
 / \ / 
4  5 6 



- **Properties:**
  - All levels except the last are completely filled.
  - All nodes in the last level are as left as possible.

---

### 3. Perfect Binary Tree

A **Perfect Binary Tree** is a binary tree in which all internal nodes have exactly two children and all leaf nodes are at the same level. This means the tree is both full and complete.

#### Diagram:
    1
   / \
  2   3
 / \ / \
4  5 6  7



- **Properties:**
  - All leaf nodes are at the same level.
  - All internal nodes have exactly two children.

---

### 4. Balanced Binary Tree

A **Balanced Binary Tree** is a binary tree where the difference between the height of the left and right subtrees of every node is at most one. This ensures that the tree remains balanced and operations like search, insertion, and deletion remain efficient.

#### Diagram:
    1
   / \
  2   3
 /   / \
4   5   6



- **Properties:**
  - The height difference between the left and right subtrees of any node is at most 1.
  - The tree remains relatively balanced, ensuring efficient operations.

---

### 5. Degenerated (or Pathological) Binary Tree

A **Degenerated Binary Tree** is a binary tree where every parent node has only one child. This essentially makes the tree behave like a linked list. The height of the tree is equal to the number of nodes.

#### Diagram:
    1
     \
      2
       \
        3
         \
          4


- **Properties:**
  - Every node has only one child.
  - The tree degenerates into a linked list.
  - The height of the tree is equal to the number of nodes.

---

## Conclusion

Each type of binary tree has unique characteristics that make it useful in different applications. Full binary trees are great for scenarios where each node must have two children, while complete and perfect binary trees ensure an efficient, balanced structure. Balanced binary trees, on the other hand, provide optimal performance for dynamic operations. Finally, degenerated binary trees are an extreme case of inefficient structures, resembling a linked list.
