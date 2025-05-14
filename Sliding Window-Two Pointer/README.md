# On this topic there could be the four types of problem that can be solved/made

# 1. Constant window:

in an array or LL, you want some constant consicutive in your output.
this type of problem can be solve like this:

```javascript
// Initialization
low = 0
high = k - 1
maxSum = sum of elements from index low to high
windowSum = maxSum

// Slide the window until the end of array
while (high < n - 1) {
    windowSum = windowSum - arr[low]      // remove element leaving window
    low = low + 1
    high = high + 1
    windowSum = windowSum + arr[high]     // add element entering window
    maxSum = max(maxSum, windowSum)
}

return maxSum
```

## 🧠 Sliding Window Problem Categories

| Category                 | Common Variants                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Fixed-size Window**    | - Maximum/minimum sum of subarray<br>- Maximum element in each window<br>- Count subarrays with a specific condition                                         |
| **Variable-size Window** | - Longest/shortest subarray with sum ≤ or ≥ target<br>- Longest substring without repeating characters<br>- Subarray with at most `k` distinct elements      |
| **Frequency/Character**  | - Find all anagrams in a string<br>- Minimum window substring<br>- Permutation inclusion in string<br>- Longest substring after at most `k` replacements     |
| **Two-pointer Sliding**  | - Count all subarrays with sum < target<br>- Find pairs with difference ≤ target<br>- Maximize elements in window under constraint (e.g., 2 types of fruits) |

> These categories help in classifying over 20+ classic and interview-grade sliding window problems.

# 2. Longest subarray/string where <condition> [variable size window]

    for this type of problem go with three flows
        1. brute force
        2. better
        3. optimal solution

### i.e. longest subarray with sum<= k and have to return length, array, sum etc

### METHOD 1: generate all sub-array (brute force) TC: O(N^2) SC: O(1)

```js
const arr = [2, 35, 4, 23, 5];
const k = 14;
const n = arr.length;
let maxLength = 0;

for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
        sum += arr[j];

        if (sum <= k) {
            maxLength = Math.max(maxLength, j - i + 1);
        } else {
            // Basic optimization: break as soon as sum exceeds k
            break;
        }
    }
}

console.log(maxLength); // Output: 1
```

### METHOD 2(better): 🚀 Optimized Approach Using Two-Pointer / Sliding Window

### 🔍 Problem with Naive Approach

In the naive solution, we use **nested loops** to explore all possible subarrays.  
This leads to a **time complexity of O(N²)**, which is inefficient for large arrays.

We aim to optimize this by avoiding the nested loop — and for that, we can use the **two-pointer technique**, also known as the **sliding window approach**.

---

### ✅ Optimized Strategy (Two-Pointer Technique)

We use two pointers:

-   `l` → represents the **left** boundary of the window
-   `r` → represents the **right** boundary of the window

At any moment, two actions are possible:

1. **Expand the window** → Move `r` to the right to include more elements.
2. **Shrink the window** → Move `l` to the right if the sum exceeds the allowed limit.

---

### 📌 Example Problem

**Find the length of the longest subarray with sum ≤ `k`.**

arr = [2, 5, 1, 7, 10] sum <= 14 longest subarray

```js
function longestSubarrayWithSumLEK(arr, k) { //TC: O(N + N), SC: O(1)
  let left = 0, right = 0;
  let sum = 0;
  let maxLength = 0;
  const n = arr.length;

  while (right < n) {
    sum += arr[right];

    // Shrink the window if the sum exceeds k
    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }

    // Now sum <= k
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}
-> till the condition is true: just expand
-> till the condition is false: just shrink {

}
```

### METHOD 3(optimized):

somewhere the inner loop was taking the extra N time, if we can minimize it then our problem is solved
so we'll use the below method

```js
function longestSubarrayWithSumLEK(arr, k) {
    let left = 0,
        right = 0;
    let sum = 0;
    let maxLength = 0;
    const n = arr.length;

    while (right < n && left <= right) {
        sum += arr[right];

        // Shrink window while sum exceeds k
        if (sum > k) {
            sum -= arr[left++];
        }

        // Update maxLength for current valid window
        maxLength = Math.max(maxLength, right - left + 1);

        // Expand window
        right++;
    }

    return maxLength;
}
```

# 3. Number of subarray with condition[sum = k]

### 🔢 Number of Subarrays with Sum = K

This problem is best solved using the **Prefix Sum + HashMap** pattern.

#### Why not Sliding Window?

Sliding window only works when:

-   All elements are **positive**, or
-   We want the **longest/shortest** subarray.

But here, we want to count **all valid subarrays** — so we need to track prefix sums.

#### Pattern:

-   Use a `Map` to store frequencies of prefix sums.
-   At each index, compute `currentSum`.
-   If `currentSum - k` exists in the map, it contributes to the count.

#### Time Complexity: O(N)

```js
function countSubarraysWithSumK(arr, k) {
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // base case: prefix sum of 0 occurs once

    let sum = 0;
    let count = 0;

    for (let num of arr) {
        sum += num;

        // Check if there's a prefix sum that leads to sum = k
        if (prefixSumCount.has(sum - k)) {
            count += prefixSumCount.get(sum - k);
        }

        // Update the prefix sum map
        prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
    }

    return count;
}
```

# 4. Shortest/minimum windows with condition

### 🪟 Shortest Subarray with Sum ≥ K

This is a classic **shrinking sliding window** problem.

#### Pattern:

-   Expand the window by moving `right` and adding to sum.
-   Shrink the window from the `left` **as long as sum ≥ k**.
-   Track the minimum length during valid windows.

#### Key Condition:

All elements must be **positive** for this pattern to work.

#### Time Complexity: O(N)

```js
function minSubarrayLengthSumAtLeastK(arr, k) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        // Try shrinking the window while sum ≥ k
        while (sum >= k) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left++];
        }
    }

    return minLength === Infinity ? 0 : minLength;
}
```
