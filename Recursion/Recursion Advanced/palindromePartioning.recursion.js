function isPalindrome(str) {
    let start = 0
    let end = str.length - 1
    while (start < end) {
        if (str[start] === str[end]) {
            start++
            end--
        } else return false
    }
    return true
}

function backtrack(index, list, ans, str) {
    if (index === str.length) {
        ans.push([...list])
        return
    }

    for (let i = index + 1; i <= str.length; i++) {
        const tempString = str.slice(index, i)
        if (this.check(tempString)) {
            list.push(tempString)
            this.backtrack(i, list, ans, str)
            list.pop()
        }
    }
    return
}

function partition(s) {
    const ans = []
    this.backtrack(0, [], ans, s)
    return ans
}