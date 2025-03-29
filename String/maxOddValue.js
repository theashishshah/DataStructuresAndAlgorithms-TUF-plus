function largeOddNum(inputNumberString) {
    // inputNumberString = +inputNumberString
    // console.log(inputNumberString)
    // inputNumberString = (+inputNumberString).toString()

    inputNumberString = inputNumberString.trimStart('0');
    console.log(inputNumberString);
    let stringLength = inputNumberString.length - 1;
    let index = -1;
    for (let i = stringLength; i >= 0; i--) {
        if (inputNumberString[i] % 2 !== 0) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        return inputNumberString.substring(0, index + 1).toString();
    } else {
        return '';
    }
}

// console.log(largeOddNum("10518744893355417179246823175744807186800203297843892443383524044741598078231786879432167377848"))

// console.log(largeOddNum("021463"))
// console.log(+("1") > 0)
// const arr = [1, 2, 3, 4, 5]
// let ele = arr.shift()
// arr.push(ele)
// console.log(arr.join(""))

let s = 'ashish';
let t = 'Ashish';
const one = new Array(256).fill(0);
const two = new Array(256).fill(0);
for (let i = 0; i < s.length; i++) {
    console.log(s.charCodeAt(i) - 97)
    // console.log('a'.charCodeAt(0))
    // console.log(one[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    // one[s.charCodeAt(i)] = one[s.charCodeAt(i)] + 1;
    // two[t.charCodeAt(i)] = two[t.charCodeAt(i)] + 1;
}

// console.log(one.toString());
// console.log(two.toString());
// console.log('a'.charCodeAt(0));
