function longestNonRepeatingSubstring(string) {
         // TC: O(N*N), SC: O(N)
        if(!str || str.length === 1) return str.length
        let maxLen = 0
        for(let i = 0; i < str.length; i++){
            const set = new Set()
            for(let j = i; j < str.length; j++){
                if(set.has(str[j])) break
                set.add(str[j])
                maxLen = Math.max(maxLen, j - i + 1)
            }
        }
        return maxLen
    }
console.log(longestNonRepeatingSubstring("bxnsjfoaycmnwaluznqpwl"))