// function totalFruits(fruits) {
//     if (fruits.length === 1) return 1;

//     // check if there is only one kind of fruits
//     let set = new Set(fruits);
//     if (set.size === 1) return fruits.length;
//     set.clear();

//     let maxLength = 0;
//     for (let i = 0; i < fruits.length; i++) {
//         set.clear();
//         for (let j = i; j < fruits.length; j++) {
//             if (set.size < 2) {
//                 set.add(fruits[j]);
//                 maxLength = Math.max(maxLength, j - i + 1);
//             } else if (set.size === 2 && set.has(fruits[j])) {
//                 maxLength = Math.max(maxLength, j - i + 1);
//             } else break;
//         }
//     }
//     return maxLength;
// }

function totalFruits(fruits) {
    if (fruits.length === 1) return 1;

    // check if there is only one kind of fruits
    let set = new Set(fruits);
    if (set.size === 1) return fruits.length;
    set.clear();
    let left = 0;
    let right = 0;
    let maxLength = 0;
    while (right < fruits.length) {
        set.add(fruits[right]);
        while (set.size > 2) {
            set.delete(fruits[left]);
            left++;
            set.add(fruits[left]);
        }
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    return maxLength;
}

var totalFruit = function (fruits) {
    if (fruits.length === 1) return 1

    // check if there is only one kind of fruits
    let set = new Set(fruits)
    if (set.size === 1) return fruits.length
    set.clear()
    let left = 0
    let right = 0
    let maxLength = 0
    const map = new Map()
    while (right < fruits.length) {
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1)

        if (map.size > 2) {
            let leftValue = map.get(fruits[left])
            if (leftValue <= 1) {
                map.delete(fruits[left])
            } else {
                map.set(fruits[left], leftValue - 1)
            }
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)
        right++
    }
    return maxLength
};