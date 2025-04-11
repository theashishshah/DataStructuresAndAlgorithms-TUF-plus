const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 2, 7];
const set = new Set([...nums2, ...nums1])
const unionArray = Array.from(set).sort((a, b) => a - b)
console.log(unionArray)
console.log(set)
