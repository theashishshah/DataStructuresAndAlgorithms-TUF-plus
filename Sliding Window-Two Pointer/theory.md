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

| Category              | Common Variants                                                           |
|-----------------------|---------------------------------------------------------------------------|
| **Fixed-size Window** | - Maximum/minimum sum of subarray<br>- Maximum element in each window<br>- Count subarrays with a specific condition |
| **Variable-size Window** | - Longest/shortest subarray with sum ≤ or ≥ target<br>- Longest substring without repeating characters<br>- Subarray with at most `k` distinct elements |
| **Frequency/Character** | - Find all anagrams in a string<br>- Minimum window substring<br>- Permutation inclusion in string<br>- Longest substring after at most `k` replacements |
| **Two-pointer Sliding** | - Count all subarrays with sum < target<br>- Find pairs with difference ≤ target<br>- Maximize elements in window under constraint (e.g., 2 types of fruits) |

> These categories help in classifying over 20+ classic and interview-grade sliding window problems.
