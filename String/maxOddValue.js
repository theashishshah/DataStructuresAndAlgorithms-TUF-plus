function largeOddNum(inputNumberString) {
    // inputNumberString = +inputNumberString 
    // console.log(inputNumberString)
    // inputNumberString = (+inputNumberString).toString()

    inputNumberString = inputNumberString.trimStart("0")
    console.log(inputNumberString)
    let stringLength = inputNumberString.length - 1
    let index = -1;
    for(let i = stringLength; i >= 0; i--){
        if(inputNumberString[i] % 2 !== 0){
            index = i;
            break;
        }
    }
    if(index !== -1){
        return (inputNumberString.substring(0, index + 1)).toString()
    }else {
        return ""
    }

}

// console.log(largeOddNum("10518744893355417179246823175744807186800203297843892443383524044741598078231786879432167377848"))

// console.log(largeOddNum("021463"))
// console.log(+("1") > 0)
const arr = [1, 2, 3, 4, 5]
let ele = arr.shift()
arr.push(ele)
console.log(arr.join(""))