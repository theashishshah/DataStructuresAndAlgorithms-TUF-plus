// let s = 'ashish';
// const map = new Map();
// for (let i = 0; i < s.length; i++) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
// }
// // convert this map into array

// console.log(Array.from(map).sort((a, b) => {
//     if (a[0] !== b[0]) return b[0] - a[0];
//     return a[1].localeCompare(b[1]);
// }))

// class Solution {
//     frequencySort(s) {
//         // Frequency array for characters 'a' to 'z'
//         let freq = Array(26).fill(0).map((_, i) => [0, String.fromCharCode(i + 97)]);
//         console.log(freq)

//         // Count frequency of each character
//         for (let ch of s) {
//             freq[ch.charCodeAt(0) - 97][0]++;
//         }

//         // Sort by frequency (descending) and alphabetically (ascending)
//         freq.sort((a, b) => {
//             if (a[0] !== b[0]) return b[0] - a[0];
//             return a[1].localeCompare(b[1]);
//         });

//         // Collect characters with non-zero frequency
//         let result = [];
//         for (let [count, char] of freq) {
//             if (count > 0) result.push(char);
//         }
//         return result;
//     }
// }

// // Main method to test the function
// const sol = new Solution();
// const s = "tree";
// const result = sol.frequencySort(s);
// console.log(result);


// class Solution {
//     frequencySort(s) {
//         // Frequency array for characters 'a' to 'z'
//         // let freq = Array(26).fill(0).map((_, i) => [0, String.fromCharCode(i + 97)]);
//         // console.log(freq)

//         // // Count frequency of each character
//         // for (let ch of s) {
//         //     freq[ch.charCodeAt(0) - 97][0]++;
//         // }
//         let freq = new Map()
//         for(let i = 0; i < s.length; i++){
//             freq.set(s[i], (freq.get(s[i]) || 0) + 1)
//         }
//         // freq = Array.from(freq)
//         console.log(freq)
//         // Sort by frequency (descending) and alphabetically (ascending)
//         freq.sort((a, b) => {
//             if (a[1] !== b[1]) return b[1] - a[1];
//             return a[0].localeCompare(b[0]);
//         });

//         // Collect characters with non-zero frequency
//         console.log(freq)
//         let result = [];
//         for (let [char, count] of freq) {
//             // console.log(char)
//             if (count > 0) result.push(char);
//         }
//         return result;
//     }
// }

// // Main method to test the function
// const sol = new Solution();
// const s = "tree";
// const result = sol.frequencySort(s);
// console.log(result);


class Solution {
    sumHighestAndLowestFrequency(nums) {
        if(nums.length === 1 || nums.length === 2) return 2
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        let maxFre = Number.NEGATIVE_INFINITY
        let minFre = Number.POSITIVE_INFINITY

        map.forEach((value, key) => {
            if(value > maxFre) {
                maxFre = value
            }
            if(value < minFre){
                minFre = value 
            }
        })
        return maxFre + minFre
        
    }
}

// Example usage
let nums =  [10, 9, 7, 7, 8, 8, 8];

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to get the sum of highest
and lowest frequency in array */
let ans = sol.sumHighestAndLowestFrequency(nums);

console.log("The sum of highest and lowest frequency in the array is:", ans);