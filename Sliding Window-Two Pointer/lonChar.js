// if (!inputString || inputString.length === 1) return inputString.length;

// // if there is only one type of characters then
// const charSet = new Set(inputString);
// if (charSet.size === 1) return inputString.length;
// charSet.clear();

// let maxLength = 0;
// for (let i = 0; i < inputString.length; i++) {
//     let remainingReplacements = k;
//     let currentStartingCharacter = inputString[i];
//     for (let j = i; j < inputString.length; j++) {
//         if (currentStartingCharacter === inputString[j])
//             maxLength = Math.max(maxLength, j - i + 1);
//         else if (
//             currentStartingCharacter !== inputString[j] &&
//             remainingReplacements > 0
//         ) {
//             maxLength = Math.max(maxLength, j - i + 1);
//             remainingReplacements--;
//         } else break;
//     }
// }
// return maxLength;




function characterReplacement(inputString, k = 0) {
        if (!inputString || inputString.length === 1) return inputString.length;

        // if there is only one type of characters then
        const charSet = new Set(inputString);
        if (charSet.size === 1) return inputString.length;
        charSet.clear();

        let maxLength = 0;
        for (let i = 0; i < inputString.length; i++) {
            let remainingReplacements = k || 0;
            charSet.clear()
            charSet.add(inputString[i])
            for(let j = 0; j < inputString.length; j++){
                if (i === j) {
                    maxLength = Math.max(maxLength, j  + 1)
                    continue
                }
                if(charSet.has(inputString[j])){
                    maxLength = Math.max(maxLength, j  + 1)
                }
                if (!charSet.has(inputString[j]) && remainingReplacements > 0){
                    maxLength = Math.max(maxLength, j  + 1)
                    remainingReplacements--
                }
            }

        }
        return maxLength;

    }
console.log(characterReplacement("BDDEC"));
