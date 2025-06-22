# Complete Binary Tree vs. Almost Complete Binary Tree

Binary trees are a fundamental data structure in computer science. Among the different types, **Complete Binary Tree** and **Almost Complete Binary Tree** are often used in heap and tree-based algorithms.

---

## 🌳 Complete Binary Tree

### ✅ Definition:
A **Complete Binary Tree** is a binary tree in which all levels are completely filled **except possibly the last level**, and the last level has all keys **as left as possible**.

### 📌 Properties:
- All levels are fully filled **except the last**.
- Nodes at the last level are **as far left as possible**.
- If the tree has height `h`, then it has **at least** `2^h` and **at most** `2^(h+1) - 1` nodes.

### 🖼️ Example:
```js
    1
  /   \
 2     3
/ \   /
```


This is a complete binary tree: all levels are filled, and the last level has nodes from left to right without gaps.

---

## 🌿 Almost Complete Binary Tree

### ⚠️ Definition:
The term **"Almost Complete Binary Tree"** is not always formally defined, but it is often used to describe a tree that is **nearly complete**, but:
- May have some **gaps on the right side** of the last level.
- Does **not necessarily follow** the "as left as possible" rule strictly.

Sometimes, it's used loosely to refer to trees that are:
- Not complete,
- But have most properties of a complete binary tree.

### ❌ Not a Complete Binary Tree Example:

```js
    1
  /   \
 2     3
/       \
```


Here:
- Level 2 is not fully filled (missing node 5).
- Last level nodes are **not left-aligned**.
- So it's **not a complete binary tree** — this might be referred to informally as "almost complete".

---

## 🔍 Summary

| Property                     | Complete Binary Tree         | Almost Complete Binary Tree       |
|-----------------------------|------------------------------|-----------------------------------|
| All levels filled           | Yes, except possibly last    | No                                |
| Nodes left-aligned          | Yes                          | Not necessarily                   |
| Used in heaps               | Yes                          | No (usually not)                  |
| Formal definition exists?   | Yes                          | No (informal/loose usage)         |

---

> 📘 **Note**: In many textbooks and technical definitions, only "Complete Binary Tree" is formally defined. Be cautious with the term "almost complete" — it's more descriptive than formal.
