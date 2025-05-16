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



function longestNonRepeatingSubstring(str) {
        if(!str || str.length === 0) return 0

        // if str has all identical or all different characters
        let charSet = new Set(str)
        if(charSet.size === 1) return 1
        if(charSet.size === str.length) return charSet.size
        charSet.clear()

        let start = 0;
        let maxLength = 0
        
        for(let end = 0; end <str.length; end++){
            while(charSet.has(str[end])){
                charSet.delete(str[start++])
            }
            charSet.add(str[end])
            maxLength = Math.max(maxLength, end - start + 1)
        }
        return maxLength
    }