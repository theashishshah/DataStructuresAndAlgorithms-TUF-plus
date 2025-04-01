// you do your task before calling again function

// let count = 0;

// function print(){
//     if(count === 4){
//         return
//     }
//     console.log("Ashish")
//     count++
//     print()
// }

// print()
/**
 * 1st call -> count = 0, count === 4 -> false, logg: Ashish, count = 1,
 * 2nd call -> count = 1, count === 4 -> false, logg: Ashish, count = 2,
 * 3rd call -> count = 2, count === 4 -> false, logg: Ashish, count = 3,
 * 4th call -> count = 3, count === 4 -> false, logg: Ashish, count = 4
 */

// do the same thing using tail recursion:

// 1: 1 to N:

function print(i, N) {
    if (N <= 0) {
        return;
    }

    console.log(i++);
    print(i, N - 1);
}
print(1, 5);
