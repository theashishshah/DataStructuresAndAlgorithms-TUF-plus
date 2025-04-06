function addDigits(num) {
    let temp = num;
    if (temp.toString().length === 1) return temp;
    let result;
    do {
        result = 0;
        let len = temp.toString().length;
        for (let i = 0; i < len; i++) {
            result += +temp.toString().charAt(i);
        }
        temp = result
        // console.log(result)
    } while (result.toString().length !== 1);
    return result;
}
console.log(addDigits(529));
