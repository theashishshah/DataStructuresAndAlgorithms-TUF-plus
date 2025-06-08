// your code goes here

function backtrack(index, ans, current, value) {
    if (current.length === 1) {
        ans.push(current)
        return
    }

    if (index === value.length) return

    current += value.charAt(index)
    backtrack(index + 1, ans, current, value)

    const tempArray = Array.from(current)
    tempArray.pop()
    current = tempArray.join()
    backtrack(index + 1, ans, current, value)
}


const value = "345" // ["3", "4", "5"]
const result = []
backtrack(0, result, "", value)
console.log(result)