function backtrack(index, ans, current, digits, map) {
    if (current.length === digits.length) {
        ans.push(current)
        return
    }
    if (index === digits.length) return
    const key = Number(digits.charAt(index))
    const value = map.get(key)
    for (let i = 0; i < value.length; i++) {
        current += value.charAt(i)
        backtrack(index + 1, ans, current, digits, map)
        const temp = Array.from(current)
        temp.pop()
        current = temp.join("")
    }

}
