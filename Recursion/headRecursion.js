// let count = 0
// function print(){
//     if(count === 4){
//         return
//     }
//     count ++
//     print()
//     console.log("Ashish")
// }
// print()

/** How the function execution flow will go
 *  1st call -> count = 0, if(count === 4) -> false, count = 1,
 *  2nd call -> count = 1, if(count === 4) -> false, count = 2,
 *  3rd call -> count = 2, if(count === 4) -> false, count = 3,
 *  4th call -> count = 3, if(count === 4) -> false, count = 4,
 *  5th call -> count = 4, if(count === 4) -> true, now function will return:
 *  -> Ashish,
 */

// can you print N to 1 and 1 to N using head recursion:

// this is for 1 to N
// function print(N) {
//     if (N <= 0) {
//         return;
//     }
//     print(N - 1);
//     console.log(N);
// }
// print(10);

// this is for N to 1:

function print(N, i){
    if(N <= 0){
        return
    }
    // print(N - 1, i++)
    print(N - 1, ++i)
    console.log(--i)
}
print(5, 1)
