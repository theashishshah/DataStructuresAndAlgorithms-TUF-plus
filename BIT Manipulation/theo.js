function decimalToBinary(decimal) {
    if(decimal < 2) return decimal
    let ans = ""
    while (decimal > 1) {
        const rem = decimal % 2
        ans += String(rem)
        decimal = Math.floor(decimal / 2)
    }

    ans += String(decimal)
    return Array.from(ans).reverse().join("")
}

function binaryToDecimal(binary) {
    if (binary === "0") return 0
    if (binary === "1") return 1
    let ans = 0
    for (let i = 0; i < binary.length; i++){
        let power = binary.length - 1 - i
        let value = Math.pow(2, power)
        ans += Number(binary[i]) * value
    }
    return ans
}
console.log(binaryToDecimal("1110"))
console.log(decimalToBinary(10))