
function test(s){
    if(s.length === 0){
        return
    }
    const result = []
    result.push(s.pop())
    test(s)
    return result
}

const s = ["h", "e", "l", "l", "o"]
console.log(test(s))