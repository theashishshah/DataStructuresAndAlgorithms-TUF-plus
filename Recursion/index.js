// can you write a function that runs five times

// function print(baseCase){
//     if(baseCase <= 0){
//         return
//     }
//     console.log("Ashish")
//     print(--baseCase)
// }

// print(5)

// how can I print 5, 6 times

// I can use for loop:
// TC: O(6), SC: O(0)
// for(let i = 0; i < 6; i++){
//     console.log(5)
// }

// using recursion

// let numberOfTimes = 6
// function print(){
//     if(numberOfTimes <= 0){
//         return
//     }
//     console.log(5)
//     numberOfTimes--
//     print()
// }
// print()

// print from 1 to N:

// function print(N, i){
//     if(i > N){
//         return
//     }
//     console.log(i)
//     print(N, ++i)
// }
// print(10, 1)

// function palindromeCheck(s) {
//     const reverse = (str, lastIndex) => {
//         if (lastIndex < 0) {
//             return "";
//         }
//         console.log(str.charAt(lastIndex))
//         return str.charAt(lastIndex) + reverse(str, lastIndex - 1);
//     };
//     // console.log(reverse(s, s.length - 1))
//     return s === reverse(s, s.length - 1).trim();
// }
// const s = "hannah"
// console.log(palindromeCheck(s))

const arr = [1, 2, 3];
const [first, second, third, fourth] = arr;
console.log(first); // 1
console.log(second); // 2
console.log(third)
console.log(fourth)
