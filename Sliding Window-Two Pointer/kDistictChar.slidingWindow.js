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
