class Solution {
    isValid(str) {
        const stack = []
        const n = str.length
        for (let i = 0; i < n; i++) {
            const ch = str[i]
            if (
                ch === "(" || ch === "{" || ch === "["
            ) stack.push(ch)
            else {
                const top = stack.pop()
                if ((ch === ")" && top === "(")
                    || (ch === "}" && top === "{")
                    || (ch === "]" && top === "[")
                ) continue
                else return false
            }
        }
        return stack.length > 0 ? false : true
    }
}