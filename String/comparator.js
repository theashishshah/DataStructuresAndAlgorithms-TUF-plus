// const arr = [[3, 5], [67, 23], [32, 55], [10, 42]]
const arr = [1, 2, 41, 32, 21, 59, 2, 34]
let i = 0
console.log(arr.sort((a, b) =>{
    // console.log(i++)
    // console.log("Log value of a: ",a[0])
    // console.log("Log value of a: again: ", a[1])
    // console.log("Log value of b: ", b)
    console.log(a - b)
    return a - b
})) 