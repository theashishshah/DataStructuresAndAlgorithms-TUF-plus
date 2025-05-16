function totalFruits(fruits) {
    if (fruits.length === 1) return 1;

    // check if there is only one kind of fruits
    let set = new Set(fruits);
    if (set.size === 1) return fruits.length;
    set.clear();

    let maxLength = 0;
    for (let i = 0; i < fruits.length; i++) {
        set.clear();
        for (let j = i; j < fruits.length; j++) {
            if (set.size < 2) {
                set.add(fruits[j]);
                maxLength = Math.max(maxLength, j - i + 1);
            } else if (set.size === 2 && set.has(fruits[j])) {
                maxLength = Math.max(maxLength, j - i + 1);
            } else break;
        }
    }
    return maxLength;
}
