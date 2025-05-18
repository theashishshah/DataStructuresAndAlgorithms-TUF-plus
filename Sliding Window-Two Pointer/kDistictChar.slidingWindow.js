function kDistinctChar(inputString, k) {
    if (!inputString) return 0;
    const charSet = new Set(inputString);
    if (charSet.size === 1) return inputString.length;
    charSet.clear();
    let maxLength = 0;
    for (let i = 0; i < inputString.length; i++) {
        charSet.clear();
        for (let j = i; j < inputString.length; j++) {
            charSet.add(inputString[j]);
            if (charSet.size <= k) {
                maxLength = Math.max(maxLength, j - i + 1);
            } else break;
        }
    }
    return maxLength;
}


function kDistinctChar(inputString, k) {
    if (!inputString) return 0;
    const charSet = new Set(inputString);
    if (charSet.size === 1) return inputString.length;
    charSet.clear();
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const map = new Map();
    while (right < inputString.length) {
      map.set(inputString[right], (map.get(inputString[right]) || 0) + 1);
      while (map.size > k) {
        let leftValue = map.get(inputString[left]);
        if (leftValue <= 1) map.delete(inputString[left]);
        else map.set(inputString[left], leftValue - 1);
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    }
    return maxLength;
  }
