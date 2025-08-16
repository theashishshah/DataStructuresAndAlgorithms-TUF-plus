/** AND, OR, XOR, SHIFT(LEFT && RIGHT), NOT
 * 
 */
function swap() {
    let a = 10
    let b = 20
    a = a ^ b // a = a ^ b
    b = a ^ b // b = a
    a = a ^ b // (a ^ b) ^ a
    console.log("a: ", a, "\nb: ", b)
}
swap()