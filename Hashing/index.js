const arr = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1]
/** I need to find how many times 1 occured
 * 
 */

// its time complexity will be O(N) for each query: and if there are N queries then TC O(N^2). So implement hash table
let count = 0
arr.forEach(element => {
    if(element === 1){
        count ++
    }
});
console.log(count)